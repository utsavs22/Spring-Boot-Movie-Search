package com.mainApp.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mainApp.app.service.MovieService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {
	
	@Autowired
	private MovieService movServ;
	
	@PostMapping("/search-movies")
	public String searchMovies(@RequestParam String name) {
		System.out.println("Recieved name- "+name);
		String response = movServ.searchMovies(name);
		System.out.println(response);
		return response;
	}
	
	@PostMapping("/movie-details")
	public String getMovies(@RequestParam String title) {
		System.out.println("Recieved title- "+title);
		String response = movServ.getMovies(title);
		return response;
		
	}
	
}
