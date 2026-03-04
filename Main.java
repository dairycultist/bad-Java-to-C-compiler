// to run:
//
// javac main.java
// java Main

public class Main {
	int x = 20;
	
	public void foo() {
		System.out.println(x);
	}
	
	public static void main(String[] args) {
		new Main().foo();
	}
}
