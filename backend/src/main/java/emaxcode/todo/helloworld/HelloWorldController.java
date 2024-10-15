package emaxcode.todo.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class HelloWorldController {

    @GetMapping( "/hello")
    public String helloWorld() {
        return "Hello World";
    }

    @GetMapping("/hello-bean")
    public HelloWorldDTO helloWorldBean() {
        // return new HelloWorldDTO("Hello world bean");
        throw new RuntimeException("ERROR!!");
    }

    @GetMapping("/hello-bean/path-variable/{name}")
    public HelloWorldDTO helloWorldBeanWithPathVariable(@PathVariable String name) {
        return new HelloWorldDTO(String.format("Hello world, %s", name));
    }


}