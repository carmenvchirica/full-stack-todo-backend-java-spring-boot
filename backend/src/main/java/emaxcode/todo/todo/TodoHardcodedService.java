package emaxcode.todo.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList<>();
    private static Long idCounter = 0L;

    static {
        todos.add(new Todo(++idCounter, "carmen", "Learn Java", new Date(), false));
        todos.add(new Todo(++idCounter, "carmen", "Learn Microservices", new Date(), false));
        todos.add(new Todo(++idCounter, "carmen", "Learn Angular", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }

}
