const questionData = [
    {
        question: "What is Java?",
        option: ["A programming language", "A database", "An operating system", "A web server"],
        answer: "A programming language"
    },
    {
        question: "What does JVM stand for?",
        option: ["Java Virtual Machine", "Java Vendor Manager", "Java Variable Method", "Java Version Module"],
        answer: "Java Virtual Machine"
    },
    {
        question: "What is the JDK?",
        option: ["Java Development Kit", "Java Deployment Kit", "Java Debug Kit", "Java Design Kit"],
        answer: "Java Development Kit"
    },
    {
        question: "Which component executes Java bytecode?",
        option: ["JVM", "JDK", "JRE", "JAR"],
        answer: "JVM"
    },
    {
        question: "Which of these is not a Java primitive type?",
        option: ["String", "int", "boolean", "char"],
        answer: "String"
    },
    {
        question: "What is the default value of a boolean field in Java?",
        option: ["false", "true", "0", "null"],
        answer: "false"
    },
    {
        question: "Which keyword is used for class inheritance in Java?",
        option: ["extends", "implements", "inherits", "super"],
        answer: "extends"
    },
    {
        question: "Which keyword is used to implement an interface?",
        option: ["implements", "extends", "uses", "imports"],
        answer: "implements"
    },
    {
        question: "What is the correct signature for the Java main method?",
        option: ["public static void main(String[] args)", "public void main(String args)", "static public int main(String[] args)", "private static void main()"],
        answer: "public static void main(String[] args)"
    },
    {
        question: "What is method overloading?",
        option: ["Same method name with different parameters", "Same method name with same parameters", "Different method name with same parameters", "Changing return type only"],
        answer: "Same method name with different parameters"
    },
    {
        question: "What is method overriding?",
        option: ["Subclass provides specific implementation of superclass method", "Two methods with same name in same class", "Changing method return type only", "Using different method names"],
        answer: "Subclass provides specific implementation of superclass method"
    },
    {
        question: "What does the 'final' keyword mean for a variable?",
        option: ["Value cannot be changed after initialization", "Variable is visible to all classes", "Variable is stored on heap only", "Variable is temporary"],
        answer: "Value cannot be changed after initialization"
    },
    {
        question: "What does the 'static' keyword indicate?",
        option: ["Belongs to the class rather than an instance", "Method runs in separate thread", "Method cannot be overridden", "Variable is final"],
        answer: "Belongs to the class rather than an instance"
    },
    {
        question: "Which Collection allows duplicate elements?",
        option: ["List", "Set", "Map", "Queue"],
        answer: "List"
    },
    {
        question: "Since Java 8, interfaces can have which of the following?",
        option: ["default methods", "private constructors", "static variables with no value", "final methods"],
        answer: "default methods"
    },
    {
        question: "Which package contains the ArrayList class?",
        option: ["java.util", "java.lang", "java.io", "java.collection"],
        answer: "java.util"
    },
    {
        question: "Which of these is a checked exception?",
        option: ["IOException", "NullPointerException", "ArithmeticException", "ArrayIndexOutOfBoundsException"],
        answer: "IOException"
    },
    {
        question: "Which of these is an unchecked exception?",
        option: ["ArithmeticException", "IOException", "ClassNotFoundException", "SQLException"],
        answer: "ArithmeticException"
    },
    {
        question: "What is garbage collection in Java?",
        option: ["Automatic reclamation of unused objects", "Manual deletion of objects", "Compiling source code", "Encrypting objects"],
        answer: "Automatic reclamation of unused objects"
    },
    {
        question: "Which loop guarantees the body runs at least once?",
        option: ["do-while", "while", "for", "enhanced for"],
        answer: "do-while"
    },
    {
        question: "Which access modifier allows access in the same package and subclasses?",
        option: ["protected", "private", "public", "package-private"],
        answer: "protected"
    },
    {
        question: "What is the size of an 'int' in Java?",
        option: ["32-bit", "16-bit", "64-bit", "8-bit"],
        answer: "32-bit"
    },
    {
        question: "Which is a recommended way to create a thread in Java?",
        option: ["Implement Runnable or use Callable", "Only extend Thread", "Use synchronized only", "Use static methods"],
        answer: "Implement Runnable or use Callable"
    },
    {
        question: "What does the 'public' keyword indicate?",
        option: ["Accessible from any other class", "Accessible only within the package", "Accessible only to subclasses", "Accessible only inside the class"],
        answer: "Accessible from any other class"
    },
    {
        question: "What is the wrapper class for the primitive type 'int'?",
        option: ["Integer", "Int", "Double", "Long"],
        answer: "Integer"
    },
    {
        question: "Which data structure stores key-value pairs?",
        option: ["Map", "List", "Set", "Queue"],
        answer: "Map"
    },
    {
        question: "What is the purpose of the 'synchronized' keyword?",
        option: ["Ensure thread-safe access to a block/method", "Prevent object creation", "Optimize performance", "Serialize an object"],
        answer: "Ensure thread-safe access to a block/method"
    },
    {
        question: "By default, what does Object.equals() compare?",
        option: ["Reference equality unless overridden", "Content equality always", "Hash code equality", "Type equality only"],
        answer: "Reference equality unless overridden"
    },
    {
        question: "Which legacy collection is synchronized by default?",
        option: ["Vector", "ArrayList", "HashMap", "LinkedList"],
        answer: "Vector"
    },
    {
        question: "What does the 'transient' keyword do?",
        option: ["Prevents a field from being serialized", "Makes a field immutable", "Marks a field as volatile", "Allows field to be final"],
        answer: "Prevents a field from being serialized"
    },
    {
        question: "What is the purpose of the 'volatile' keyword?",
        option: ["Ensures visibility of changes across threads", "Prevents method overriding", "Makes a field final", "Serializes the field"],
        answer: "Ensures visibility of changes across threads"
    },
    {
        question: "Which operator is used to compare primitive values for equality?",
        option: ["==", "equals", "===", "compareTo"],
        answer: "=="
    },
    {
        question: "How do you convert a String to an int in Java?",
        option: ["Integer.parseInt(String)", "String.toInt()", "Integer.valueOf(String).toInt()", "parse.Int(String)"],
        answer: "Integer.parseInt(String)"
    },
    {
        question: "What does the 'instanceof' operator do?",
        option: ["Checks whether an object is an instance of a given type", "Creates a new instance", "Compares two objects for equality", "Returns the class name"],
        answer: "Checks whether an object is an instance of a given type"
    },
    {
        question: "Which of these is an example of an immutable class in Java?",
        option: ["String", "StringBuilder", "ArrayList", "StringBuffer"],
        answer: "String"
    },
    {
        question: "Which annotation indicates a functional interface?",
        option: ["@FunctionalInterface", "@Functional", "@Interface", "@Lambda"],
        answer: "@FunctionalInterface"
    },
    {
        question: "Which stream class is used for reading raw bytes?",
        option: ["InputStream", "Reader", "Writer", "BufferedReader"],
        answer: "InputStream"
    },
    {
        question: "Which keyword prevents a method from being overridden?",
        option: ["final", "static", "private", "transient"],
        answer: "final"
    },
    {
        question: "Which collection stores only unique elements?",
        option: ["Set", "List", "Queue", "Map"],
        answer: "Set"
    },
    {
        question: "What is the purpose of the diamond operator <> in generics?",
        option: ["Type inference for generic instance creation", "Declare array types", "Specify package names", "Annotate deprecated methods"],
        answer: "Type inference for generic instance creation"
    },
    {
        question: "Calling a method on a null reference will cause which exception?",
        option: ["NullPointerException", "IOException", "ClassCastException", "IllegalArgumentException"],
        answer: "NullPointerException"
    },
    {
        question: "Which feature was introduced in Java 5?",
        option: ["Generics", "Modules", "Records", "Pattern matching"],
        answer: "Generics"
    },
    {
        question: "Which method starts a new thread of execution?",
        option: ["start()", "run()", "execute()", "begin()"],
        answer: "start()"
    },
    {
        question: "What does the keyword 'this' refer to?",
        option: ["The current object", "The superclass", "A static context", "A local variable"],
        answer: "The current object"
    },
    {
        question: "What is the use of the 'super' keyword?",
        option: ["Access members of the parent class", "Declare a superclass", "Create a new object", "Call a static method"],
        answer: "Access members of the parent class"
    },
    {
        question: "Fields in an interface are by default which modifiers?",
        option: ["public static final", "private static", "protected final", "package-private"],
        answer: "public static final"
    },
    {
        question: "What is the role of the hashCode() method?",
        option: ["Provide an integer used in hashing-based collections", "Convert object to string", "Compare two objects for identity", "Serialize the object"],
        answer: "Provide an integer used in hashing-based collections"
    },
    {
        question: "Which class loader typically loads application classes?",
        option: ["System/Application ClassLoader", "Bootstrap ClassLoader", "Extension ClassLoader", "Custom ClassLoader only"],
        answer: "System/Application ClassLoader"
    },
    {
        question: "What type is System.out?",
        option: ["PrintStream", "PrintWriter", "OutputStream", "Console"],
        answer: "PrintStream"
    }
];

export default questionData;