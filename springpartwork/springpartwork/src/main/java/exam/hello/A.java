package exam.hello;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;



@CrossOrigin(origins = "http://localhos:4200") //CONTROLlER
@RestController
public class A {
	
	private B obj1; 
	
	
	@Autowired //Annotation used to Autowire this setter method 
	public void setObj1(B obj1) {
		System.out.println("basics are never out of fashion ... dont get ocnfused");
		this.obj1 = obj1;
	}
	
	@GetMapping("/getname") //annotation to indicate that the frontend method uses get 
	public String f3(@RequestParam("y") int p)//this method returns the name of the logged in user
	{     
	    return obj1.UserName(p);
		
	}
	
	@PostMapping("/login") //annotation to process HTTP post method
	public Signup CustomerLogin(@RequestBody String m) throws JsonParseException, JsonMappingException, IOException
	{
		 //this method recieves an object of signup from front end with user mob no and password
		//A class of Jackson API
		ObjectMapper mapper = new ObjectMapper(); //provides facility to read and write json to POJOs or vice versa
		//this is used since the object from the front end comes as json object which needs to be converted a POJO type object
		mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
		Signup obj = mapper.readValue(m, Signup.class);// this deserializes the content of the jsonn string to be stored it in a POJO object
		
	    return obj1.CheckCustomer(obj); //calls declared in B
	}

	@PostMapping("/AddUserDetail")
	public void insertUser(@RequestBody String n) throws JsonParseException, JsonMappingException, IOException
	{
		ObjectMapper mapper = new ObjectMapper(); //Similar Functioning as described in customerlogin method
		mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
		Signup obj = mapper.readValue(n,Signup.class);
	    obj1.InsertUser(obj);
		
	}
	@PostMapping("/NewPost")
	public void AddNewPost(@RequestBody String s) throws JsonParseException, JsonMappingException, IOException
	{
		
		ObjectMapper mapper = new ObjectMapper();//Similar Functioning as described in customerlogin method
		mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
		Post ob = mapper.readValue(s,Post.class);
	    obj1.NewPost(ob);
		
		
	}
	
	@GetMapping("/GetPost")
	public List<String> getAllPost(@RequestParam("y") String n) //this method returns all the 
	{																	//previous posts done the the logged in user
	 return obj1.AllPost();
	}

	@GetMapping("/GetPost1")
	public List<String> getAllPost1(@RequestParam("y") String n) 
	{
		System.out.println(n);
	 return obj1.AllPost1();
	}
	@GetMapping("/GetPost2")
	public List<String> getAllPost2(@RequestParam("y") String n) 
	{
		System.out.println(n);
	 return obj1.AllPost2();
	}
	
	@PostMapping("/GetConnection")
	public List<String> getAllConnection(@RequestBody String s) //returns the list of the names of the connected users 
	{
		System.out.println("Here to get connection"+s);
		return obj1.AllConnection();
	}
	@PostMapping("/GetNonConnection") //returns the list of the non connected users
	public List<String> getNonConnection(@RequestBody String m) 
	{
		System.out.println("Here to get non connection2"+" "+m);
		return obj1.AllNonConnection();
	}
	@PostMapping("/GetMConnection") //returns list of mutual connections
	public List<String> getMConnection(@RequestBody String s) 
	{
		System.out.println("Here to get connection"+s);
		return obj1.AllMConnection();
	}
	@PostMapping("/GetSConnection") //returns suggested connections
	public List<String> getSConnection(@RequestBody String s) 
	{
		System.out.println("Here to get connection"+s);
		return obj1.AllSConnection();
	}
}
