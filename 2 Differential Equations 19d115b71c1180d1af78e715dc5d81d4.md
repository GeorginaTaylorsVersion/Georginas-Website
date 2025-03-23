# 2. Differential Equations

- 2.1 Introduction to Differential Equations
    
    **2.1.8 General Solution, Particular Solution**
    The complete collection of solutions to a DE, including any arbitrary constants, is called its general solution. A particular solution to a DE is one in which all arbitrary constants have been specified.
    
    **2.1.9 Initial Value Problem**
    A differential equation together with one or more initial conditions is known as an initial value problem or IVP.
    
- 2.2 Separable Differential Equations
    
    **2.2.1 Separable DE**
    A first-order differential equation is said to be separable if it can be written in the form 
    $\frac{dy}{dx} = g(x)h(y)$
    
    **Method: Solving a Separable DE** 
    Below we present the steps to solve a separable differential equation, $\frac{dy}{dx} = g(x)h(y)$. This method is known as separation of variables.
    1. Determine any solutions $y$ with $h(y) = 0$.
    2. Find the solutions $y$ where $h(y) \neq 0$ by evaluating the integrals $\int \frac{1}{h(y)} \, dy = \int g(x) \, dx$
    If possible, isolate $y$ as a function of $x$ in the resulting equation.
    The general solution is the collection of all solutions obtained in Step 1 together with all solutions obtained in Step 2.
    
    **2.2.7 Singular Solution to a DE**
    A solution to a DE that is separate from a family of solutions to the DE is called a singular solution.
    
- 2.3 Linear First-Order Differential Equations
    
    **2.3.1 Linear DE**
    A linear differential equation of order n has the form 
    $A_n(x)\,y^{(n)} + A_{n-1}(x)\,y^{(n-1)} + \cdots + A_1(x)\,y' + A_0(x)\,y = B(x)$ where $A_n(x) \neq 0$.
    
    **2.3.4 Standard Form** 
    A first-order linear DE of the form $y' + P(x)\,y = Q(x)$is said to be in standard form.
    
    **2.3.6 Integrating Factor** 
    Given a DE of the form $y' + P(x)\,y = Q(x)$, the function $\mu(x) = e^{\int P(x)\,dx}$ is called an integrating factor for the DE.
    
    Method: Solving a First Order Linear DE
    To solve a first-order linear DE, $A_1(x)y' + A_0(x)y = B(x)$:
    1. Divide by $A_1(x)$ to write the DE in standard form: $y' + P(x)\,y = Q(x)$.
    2. Multiply both sides of the equation by the integrating factor $\mu(x) = e^{\int P(x)\,dx}$.
    3. Rewrite the left-hand side of the resulting equation as $\bigl(\mu(x)\,y\bigr)'$.
    4. Integrate both sides of the equation with respect to $x$.
    5. Isolate $y$.
    
- 2.4 Applications of Differential Equations
    
    **2.4.1 The Newton's Law of Heating/Cooling DE and its Solution**
    If $T = T(t)$ denotes the temperature of an object as a function of time and $T$ varies according to Newton's Law of Cooling, then 
    $\frac{dT}{dt} = -k\bigl(T - T_s\bigr)$, 
    where $T_s$ is the temperature of the object's surroundings. The solutions to this DE are $T(t) = T_s + A\,e^{-kt}$ where $A$ is a constant.
    
    **2.4.3 The Exponential Growth/Decay DE and its Solutions**
    The solutions to the exponential growth DE 
    $\frac{dP}{dt} = kP$ 
    are given by $P(t) = A e^{kt}$, 
    where $A = P(0)$.
    
    **2.4.6 The Logistic DE and its Solutions** 
    Let $M$ denote the carrying capacity of a population. The solutions to the logistic DE 
    $\frac{dP}{dt}=kP(1−\frac{P}{M})$ 
    are given by  $P(t) = \frac{M}{1 + A e^{-kt}}$, 
    where $A$ is a constant. Furthermore, if $P(0)$ is the initial population, then $A = \frac{M - P(0)}{P(0)}$.