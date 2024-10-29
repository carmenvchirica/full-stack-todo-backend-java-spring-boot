package emaxcode.todo.basic.auth;

public class BasicAuthentication {

    private String message;
    private String name;

    public BasicAuthentication(String helloWorld) {
        this.message = helloWorld;
    }

    public BasicAuthentication(String message, String name) {
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
