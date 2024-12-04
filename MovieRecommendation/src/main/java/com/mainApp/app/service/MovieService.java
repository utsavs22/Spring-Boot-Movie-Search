package com.mainApp.app.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MovieService {
	
	String apiKey = "d5bcb176";
	String apiUrl = "https://www.omdbapi.com/";
	
	private final RestTemplate restTemp= new RestTemplate();
	
	public String searchMovies(String name) {
		String url = apiUrl+"?apikey="+apiKey+"&s="+name;
		String temp = restTemp.getForObject(url, String.class);
//		System.out.println(temp);
		return temp;
	}
	
	public String getMovies(String title) {
		String url = apiUrl+"?apikey="+apiKey+"&t="+title;
		String temp = restTemp.getForObject(url, String.class);
//		System.out.println(temp);
		return temp;
	}
}
