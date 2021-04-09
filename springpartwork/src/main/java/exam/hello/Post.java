package exam.hello;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
//POJO class Has similar functioning as described in Connection.java
@Entity
@Table(name="post")
public class Post 
{
	@Id
	@JsonProperty("Id")
	private int Id;
	@JsonProperty("Password")
	private String Password;
	
	
	@JsonProperty("Caption")
	private String Text;
	@JsonProperty("Imgurl")
	private String Imageurl;
	
	public Post(int id, String password, String text, String imageurl) {
		super();
		Id = id;
		Password = password;
		Text = text;
		Imageurl = imageurl;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public String getText() {
		return Text;
	}

	public void setText(String text) {
		Text = text;
	}

	public String getImageurl() {
		return Imageurl;
	}

	public void setImageurl(String imageurl) {
		Imageurl = imageurl;
	}

	public Post() 
	{
		
	}
}
