package exam.hello;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;
//POJO class Has similar functioning as described in Connection.java
@Entity
public class Signup 
{
	@Id
	@JsonProperty("Password")
	private String password;
	@JsonProperty("Mobno")
	private Long Mobno;
	
	@JsonProperty("Email")
	private String Email;
	@JsonProperty("Name")
	private String Name;
	
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String pass) {
		password = pass;
	}
	public Long getMobno() {
		return Mobno;
	}
	public void setMobno(Long mobno) {
		Mobno = mobno;
	}
	public Signup(Long mobno, String pass,String em,String name) {
		super();
		Mobno = mobno;
		password = pass;
		Email = em;
		Name = name;
	}
	public Signup() 
	{
		
	}
	
	
	
}
