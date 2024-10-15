package emaxcode.todo.helloworld;

public class HelloWorldDTO {

    private String message;
    private String name;

    public HelloWorldDTO(String helloWorld) {
        this.message = helloWorld;
    }

    public HelloWorldDTO(String message, String name) {
        this.message = message;
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
