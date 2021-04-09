package exam.hello;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class B {
	public String psword=null;
	private C obj1; //references of interfaces C,D,F
	private D obj2;
	private F obj3;
	
	@Autowired  //Autowires the setter of object of C
	public void setObj1(C obj1) {
		System.out.println("repository wired to service ");
		this.obj1 = obj1;
	}
	@Autowired //Autowires the setter of object of F
	public void setObj3(F obj3) {
		System.out.println("repository wired to service ");
		this.obj3 = obj3;
	}
	@Autowired //Autowires the setter of object of d
	public void setObj2(D obj2) {
		System.out.println("repository wired to service 2 ");
		this.obj2 = obj2;
	}
	public void InsertUser(Signup n) 
	{
		obj2.save(n); //save is an springframework methos which saves an entity
	}
	
	public void NewPost(Post n) 
	{ 
		Post p = new Post(); //this creates an object of post POJO class 
		p.setPassword(psword);
		p.setText(n.getText());
		System.out.println(n.getText()+" "+n.getImageurl());
		p.setImageurl(n.getImageurl()); 
		obj3.save(p); //and then saves the post entity by the assigning the caption and image to the object
		//of type post
	}


	public Signup CheckCustomer(Signup obj) //this method checks whether the user trying to login has signed up or not
	{
		Optional<Signup> x = obj2.findById(obj.getPassword()); //findbyId is springframework method for finding an entity by the primary key
		Signup y = null;
		if(x.isPresent())
		{
			 y = x.get();  
			 psword = y.getPassword();
		}
		 return y;
	}
	
	public String UserName(int p) { //this method gets the name of the user logging in to be displayed on 
		String str = null;          //his or her my profile page
		Optional<Signup> x = obj2.findById(psword);
		Signup y = null;
		if(x.isPresent())
		{
			 y = x.get();
			 str = y.getName();
		}
				return str;
	}
		public List<String> AllPost() //this method retrieves all the previous posts of a logged in user
		{
			List<String> strary = new ArrayList<>(); //Array List is class in collection framework for implememting a dynamic array
			 List<Post> posts = obj3.findPost(psword); //this method is a user defined method in interface F
			long n = obj3.findNumber(psword);//user defined method in interface F
			//System.out.println("Total count"+ n);
			 for(int i=0;i<n;i++)
			 {
				 Post p = new Post();
				 p = posts.get(i);
				 String str = p.getText()+","+p.getImageurl();
				 strary.add(str);
			 }
			 System.out.println(strary.size());
			return strary;
			 
		}
		public List<String> AllPost1() //Similar as described in AllPost()
		{
			String pw = "iti12344566";
			List<String> strary = new ArrayList<>();
			 List<Post> posts = obj3.findPost1(pw);
			int n = obj3.findNumber1(pw);
			System.out.println("Total count In Itika"+ n);
			 for(int i=0;i<n;i++)
			 {
				 Post p = new Post();
				 p = posts.get(i);
				 String str = p.getText()+","+p.getImageurl();
				 strary.add(str);
			 }
			 System.out.println(strary.size());
			return strary;
			 
		}

		public List<String> AllConnection() {   //returns list of names of connected users
			List<String> conn = obj1.findConn(psword); //user defined method in interface C
			Iterator it = conn.iterator();
			while(it.hasNext())
			{
				System.out.println(it.next());
			}
			return conn;
		}

		public List<String> AllNonConnection() { //returns list of names of non connected users
			List<String> nonconn = obj1.findNonConn(psword); //user defined method in interface C
			System.out.println("Non Connect count"+" "+obj1.count());
			Iterator it = nonconn.iterator();
			while(it.hasNext())
			{
				System.out.println(it.next());
			}
			return nonconn;
		}

		public List<String> AllPost2() {  //Similar as described in AllPost()
			String pw = "ast12344566";
			List<String> strary = new ArrayList<>();
			 List<Post> posts = obj3.findPost1(pw);
			int n = obj3.findNumber1(pw);
			System.out.println("Total count In Astha"+ n);
			 for(int i=0;i<n;i++)
			 {
				 Post p = new Post();
				 p = posts.get(i);
				 String str = p.getText()+","+p.getImageurl();
				 strary.add(str);
			 }
			 System.out.println(strary.size());
			return strary;
		}

		public List<String> AllMConnection() { //returns the list of mutual connections
			int Isconn =1;
			List<String> conn = obj1.findMConn(Isconn);//user defined method in interface C
			Iterator it = conn.iterator();
			while(it.hasNext())
			{
				System.out.println(it.next());
			}
			return conn;
		}

		public List<String> AllSConnection() { //returns the list of suggested connections
			int Isconn =0;
			List<String> conn = obj1.findSConn(Isconn);//user defined method in interface C
			Iterator it = conn.iterator();
			while(it.hasNext())
			{
				System.out.println(it.next());
			}
			return conn;
		}

}


