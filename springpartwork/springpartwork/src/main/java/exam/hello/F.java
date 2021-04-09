package exam.hello;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository //Functions Similary as described in C.java
public interface F extends JpaRepository<Post, Object> {
	
	@Query(
			  value = "SELECT * FROM POST WHERE Password = ?", 
			  nativeQuery = true)//retrieves all the previous posts of logged in user
    List<Post> findPost(@Param("psword")String psword);
	
	@Query(
			  value = "SELECT count(Password) FROM POST WHERE Password = ?", 
			  nativeQuery = true) //counts the no posts made by the logged in user
 Integer findNumber(@Param("psword")String psword);
	

	@Query(
			  value = "SELECT count(Password) FROM POST WHERE Password = ?", 
			  nativeQuery = true)
 Integer findNumber1(@Param("pw")String pw);
	
	
	@Query(
			  value = "SELECT * FROM POST WHERE Password = ?", 
			  nativeQuery = true)
    List<Post> findPost1(@Param("pw")String pw);

}