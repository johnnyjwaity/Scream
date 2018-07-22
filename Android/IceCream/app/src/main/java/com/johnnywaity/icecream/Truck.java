package com.johnnywaity.icecream;

public class Truck {

    private String name, phoneNum, website, email;
    private double latitude,longitude;

    public Truck(String n, String pNum, String web, String e, double lat, double lon){
        name = n;
        phoneNum = pNum;
        website = web;
        latitude = lat;
        longitude = lon;
        email = e;
        System.out.println(email);
    }

    public String getName() {
        return name;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public String getWebsite() {
        return website;
    }

    public String getEmail(){
        return email;
    }

    public double getLatitude() {
        return latitude;
    }

    public double getLongitude() {
        return longitude;
    }
}
