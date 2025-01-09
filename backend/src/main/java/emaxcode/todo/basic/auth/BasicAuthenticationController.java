package emaxcode.todo.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class BasicAuthenticationController {

    @GetMapping( "/hello")
    public String helloWorld() {
        return "Hello World";
    }

    @GetMapping("/basicauth")
    public BasicAuthentication helloWorldBean() {
        // return new HelloWorldDTO("Hello world bean");
        return new BasicAuthentication("You're authenticated!");
    }

    @GetMapping("/hello-bean/path-variable/{name}")
    public BasicAuthentication helloWorldBeanWithPathVariable(@PathVariable String name) {
        return new BasicAuthentication(String.format("Hello world, %s", name));
    }


}