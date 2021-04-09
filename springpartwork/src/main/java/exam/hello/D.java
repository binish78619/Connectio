package exam.hello;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository //Function Similarly As described in C.java
public interface D extends JpaRepository<Signup, Object> {

}
