package exam.hello;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty;
//POJO class
@Entity //this annotation specifies that a class is an entity
@Table(name="Connections") //Specifies table
public class Connection 
{ //Has private fields ,setters,getters,constructor with args,no arg constructor
	public Connection(int id, String uname, String conname, String password, boolean isconn) {
		super();
		Id = id;
		Uname = uname;
		Conname = conname;
		Password = password;
		Isconn = isconn;
	}
	private int getId() {
		return Id;
	}
	private void setId(int id) {
		Id = id;
	}
	private String getUname() {
		return Uname;
	}
	private void setUname(String uname) {
		Uname = uname;
	}
	private String getConname() {
		return Conname;
	}
	private void setConname(String conname) {
		Conname = conname;
	}
	private String getPassword() {
		return Password;
	}
	private void setPassword(String password) {
		Password = password;
	}
	private boolean isIsconn() {
		return Isconn;
	}
	private void setIsconn(boolean isconn) {
		Isconn = isconn;
	}
	@Id
	@JsonProperty("Id")
	private int Id;
	@JsonProperty("Uname")
	private String Uname;
	
	
	@JsonProperty("Conname")
	private String Conname;
	@JsonProperty("Password")
	private String Password;
	@JsonProperty("Password")
	private boolean Isconn;
	public Connection()
	{
		
	}
}
