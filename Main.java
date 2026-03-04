// to run:
//
// javac main.java
// java Main

public class Main {

	/* initialization doesn't have to occur in a constructor */
	int x = 20;
	
	public void foo() {
		System.out.println(x);
	}
	
	public static void main(String[] args) {
		new Main().foo();
	}
}
