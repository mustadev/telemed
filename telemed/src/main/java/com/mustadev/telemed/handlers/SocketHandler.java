package com.mustadev.telemed.handlers;

import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.MultiValueMap;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import org.springframework.web.util.UriComponentsBuilder;

import lombok.Data;
import lombok.Getter;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class SocketHandler extends TextWebSocketHandler {

    List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();
    Map<String, UserConnection> clients = new HashMap<String, UserConnection>();

    @Override
    public void handleTextMessage(final WebSocketSession session, final TextMessage message)
            throws InterruptedException, IOException {
        System.out.println("you have " + String.valueOf(this.sessions.size()) + " WebSocket Sessions Open!!!");
        System.out.println("you have " + String.valueOf(this.clients.size()) + " WebSocket Sessions From Map");
        System.out.println("Session HandelTextMessage " + session.toString());
        System.out.println("Text message Pyload !!!!!!" + message.getPayload());
        final JacksonJsonParser jsonParser = new JacksonJsonParser();
        final Map<String, Object> payload = jsonParser.parseMap(message.getPayload());
        if (payload == null) {
            System.out.println("Payload NULL !!!!!!");
        }
        System.out.println("Parsed Payload : " + payload.toString());
        String calleeId = String.valueOf(payload.get("calleeId"));
        System.out.println("Callee ID : " + calleeId);
        UserConnection calleeConnection = clients.get(calleeId);
        if (calleeConnection == null) {
            System.out.println("!!!!! Client " + calleeId + " IS NOT CONNECTED");
            String errorPayload = "";
            payload.put("error", "client " + calleeId + " not Connected");
            ObjectMapper mapper = new ObjectMapper();
            try {
                errorPayload = mapper.writeValueAsString(payload);
            } catch (JsonProcessingException ex) {
                ex.printStackTrace();
            }
            TextMessage errorMessage = new TextMessage(errorPayload);
            session.sendMessage(errorMessage);
            return;
        }

        WebSocketSession calleeSession = calleeConnection.getSession();

        // for (final WebSocketSession webSocketSession : sessions) {
        // if (webSocketSession.isOpen() &&
        // !session.getId().equals(webSocketSession.getId())) {
        // System.out.println("Text message To String !!!!!!" + message.toString());
        // // Principal p = session.getPrincipal();
        // // System.out.println("Session Principal: " + p.toString());
        // webSocketSession.sendMessage(message);
        // }
        // }
        if (calleeSession.isOpen()) {
            calleeSession.sendMessage(message);
        }
    }

    @Override
    public void afterConnectionEstablished(final WebSocketSession session) throws Exception {
        System.out.println(" after Connect Session QUERRY !!!" + session.getUri().getQuery());
        final MultiValueMap<String, String> queries = UriComponentsBuilder.fromUri(session.getUri()).build()
                .getQueryParams();
        final String userId = queries.get("userId").get(0);
        System.out.println("UserID !!!!!!!!!!!!!!!!!!!! " + userId);
        if (userId != null) {
            clients.put(userId, new UserConnection(userId, session));
        }
        sessions.add(session);
    }

    @Getter
    class UserConnection {
        private final String userId;
        private final WebSocketSession session;

        UserConnection(String userId, WebSocketSession session) {
            this.userId = userId;
            this.session = session;
        }
    }
}