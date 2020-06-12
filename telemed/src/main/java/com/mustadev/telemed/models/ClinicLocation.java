package com.mustadev.telemed.models;

import javax.validation.constraints.NotNull;

public class ClinicLocation {
	@NotNull
	private float latitude;
	@NotNull
	private float longitude;
	
	@NotNull
	private int zoom;

	
	public ClinicLocation(@NotNull float latitude, @NotNull float longitude, @NotNull int zoom) {
		super();
		this.latitude = latitude;
		this.longitude = longitude;
		this.zoom = zoom;
	}
	

	public ClinicLocation() {
	}


	public float getLatitude() {
		return latitude;
	}

	public void setLatitude(float latitude) {
		this.latitude = latitude;
	}

	public float getLongitude() {
		return longitude;
	}

	public void setLongitude(float longitude) {
		this.longitude = longitude;
	}

	public int getZoom() {
		return zoom;
	}

	public void setZoom(int zoom) {
		this.zoom = zoom;
	}

	
}
