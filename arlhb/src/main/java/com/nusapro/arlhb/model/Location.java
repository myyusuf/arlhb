package com.nusapro.arlhb.model;

public class Location {
	private int locationId;
	private String name;
	private City city;
	private String address;
	private String telp;
	private String fax;
	private Branch subBranch;

	public int getLocationId() {
		return locationId;
	}

	public void setLocationId(int locationId) {
		this.locationId = locationId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getTelp() {
		return telp;
	}

	public void setTelp(String telp) {
		this.telp = telp;
	}

	public String getFax() {
		return fax;
	}

	public void setFax(String fax) {
		this.fax = fax;
	}

	public Branch getSubBranch() {
		return subBranch;
	}

	public void setSubBranch(Branch subBranch) {
		this.subBranch = subBranch;
	}

}
