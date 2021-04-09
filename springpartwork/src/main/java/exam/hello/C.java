package exam.hello;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository //indicates that annotated entity is a repository
public interface C extends JpaRepository<Connection, Object>
{
	
	/*JPA stands for Java Persitent API this is used to persist data between java object and database
	 * @Query is the annotation to declare queries direclty on the repository method 
	 */
	@Query(
			  value = "SELECT Conname FROM CONNECTIONS WHERE Password = ? AND Isconn = 1", 
			 //JPA Allows you to write jpa queries as well as native sql queries
			  //all the queries used here are native sql queries 
			  nativeQuery = true)//returns the connections 
	List<String> findConn(@Param("psword")String psword);
	
	@Query(
			  value = "SELECT Conname FROM CONNECTIONS WHERE Password = ? AND Isconn = 0", 
			  nativeQuery = true)//returns the non connections
	List<String> findNonConn(@Param("psword")String psword);
	
	@Query(
			  value = "SELECT Conname FROM CONNECTIONS WHERE Uname IN ('Binish Shams','Itika Rajpurohit') AND Isconn = ?", 
			  nativeQuery = true)
	List<String> findMConn(@Param("Isconn")int psword);
	
	@Query(
			  value = "SELECT Conname FROM CONNECTIONS WHERE Uname = 'Binish Shams' AND Isconn = ?", 
			  nativeQuery = true)
	List<String> findSConn(@Param("Isconn")int psword);
}
