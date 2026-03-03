# bad-Java-to-C-compiler

Written in Node.JS

For now just assume there’s only one class (file): tokenize, abstract syntax tree, compile

```
public class Main {
	int x = 20;
	
	public void foo() {
		System.out.println(x);
	}
  
  public static void main(String[] args) {
  	new Main().foo();
  }
}
```

```
typedef struct Main Main;
struct Main {
	int x;
};

void Main_init(Main *self);
void Main_foo(Main *self);
int main(int argc, char **argv);

void Main_init(Main *self) {
	self->x = 20;
}

void Main_foo(Main *self) {
	printf(“%d\n”, self->x);
}

int main(int argc, char **argv) {
	{
		Main temp;
		Main_init(&temp);
		Main_foo(&temp);
	}
}
```
