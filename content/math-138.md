   ---
   title: "MATH 138"
   date: "2024-03-17T00:00:00.000Z"
   id: "some-unique-id"
   course: "math-138"
   ---
   

# 1. Integration

- 1.1 The Definite Integral
    
    **1.1.1 Regular Partition**
    Consider an interval [a, b] with a < b and let n be a positive integer. If we define $\Delta x = \frac{b - a}{n}$,
    then the points $a = x_0 < x_1 < x_2 < \cdots < x_{n-1} < x_n = b$ given by 
    $x_i = a + i \Delta x,\; i = 0, 1, 2, \ldots, n$
    separate [a, b] into n subintervals of equal width, $\Delta x$: 
    [a, b] = [x₀, x₁] ∪ [x₁, x₂] ∪ … ∪ [xₙ₋₁, xₙ].
    We refer to x₀, x₁, x₂, …, xₙ as a regular partition of [a, b].
    
    **1.1.2 Riemann Sum**
    Let $f$ be a function defined on [a,b]. Given a positive integer n, consider the regular partition $a = x_0 < x_1 < x_2 < \cdots < x_{n-1} < x_n = b$. A Riemann sum of $f$ with respect to this partition is an expression of the form
     $\sum_{i=1}^n f(x_i) \,\Delta x_i \;=\; f(x_1)\,\Delta x_1 \;+\; f(x_2)\,\Delta x_2 \;+\; \cdots \;+\; f(x_n)\,\Delta x_n$ where $x_i^*$ is a sample point from $[x_{i-1}, x_i]$ for each $i = 1, 2, \ldots, n$.
    
    **1.1.3 The Definite Integral, Integrability**
    Let $f$ be a function defined on [a,b]. For each positive integer n, consider the regular partition $a = x_0 < x_1 < x_2 < \cdots < x_n = b$ of $[a,b]$ into subintervals of width $\Delta x = \frac{b - a}{n}$, so $x_i = a + i \Delta x$. For each $i = 1, 2, \ldots, n$, let $x_i^*$ be a sample point in the $i$th subinterval, $[x_{i-1}, x_i]$. 
    The definite integral of f from $x = a$ to $x = b$ is the limit of Riemann sums 
    $\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i^*) \,\Delta x$ , 
    provided that this limit exists and has the same value for all possible choices of sample points $x_1^, x_2^, \ldots, x_n^*$. If this is the case, we say that $f$ is integrable on $[a,b]$.
    
    **1.1.5 Right- and Left-Endpoint Riemann Sums**
    Let $f$ be a function defined on $[a,b]$. Let $a = x_0 < x_1 < x_2 < \cdots < x_n = b$ be a regular partition of $[a,b]$ into subintervals of width $\Delta x = \frac{b-a}{n}$, so $x_i = a + i\Delta x$.
    1. The right-endpoint Riemann sum of f with respect to the partition is the Riemann sum in which the right endpoint of each interval is used as the sample point: 
    $R_n = f(x_1)\Delta x + f(x_2)\Delta x + \cdots + f(x_n)\Delta x
    = \sum_{i=1}^n f(x_i)\Delta x$
    2. The left-endpoint Riemann sum of f with respect to the partition is the Riemann sum in which the left endpoint of each interval is used as the sample point: 
    $L_n = f(x_0)\Delta x + f(x_1)\Delta x + \cdots + f(x_{n-1})\Delta x
    = \sum_{i=0}^{n-1} f(x_i)\Delta x$
    
    ![Screenshot 2025-02-28 at 2.50.00 pm.png](1%20Integration%2019d115b71c1180e4a2d9cfaccafbf029/Screenshot_2025-02-28_at_2.50.00_pm.png)
    
    **Some Useful Summation Formulas**
    $\sum_{i=1}^n 1 = 1 + 1 + 1 + \cdots + 1 \;(\text{n times})\; = n$ 
    $\sum_{i=1}^n i = 1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}$ 
    $\sum_{i=1}^n i^2 = 1^2 + 2^2 + 3^2 + \cdots + n^2 = \frac{n(n+1)(2n+1)}{6}$ 
    $\sum_{i=1}^n i^3 = 1^3 + 2^3 + 3^3 + \cdots + n^3 = \frac{n^2(n+1)^2}{4}$
    
- 1.2 Properties of the Definite Integral
    
    Let $f$ and $g$ be integrable on $[a,b]$.
    1. For any $c \in \mathbb{R}$, the function$c\,f(x)$ is integrable and $\int_a^b c\,f(x)\,dx = c \int_a^b f(x)\,dx.$
    2. The function $f + g$ is integrable and $\int_a^b (f+g)(x)\,dx = \int_a^b f(x)\,dx + \int_a^b g(x)\,dx.$
    3. If $m, M \in \mathbb{R}$ and $m≤f(x)≤M$ for all $x \in [a,b]$, then $m(b-a) \;\le\; \int_a^b f(x)\,dx \;\le\; M(b-a).$
    4. If $f(x) \ge 0$ for all $x$, then $\int_a^b f(x)\,dx \;\ge\; 0.$
    5. If $f(x) \le g(x)$ for all $x \in [a,b]$, then $\int_a^b f(x)\,dx \;\le\; \int_a^b g(x)\,dx.$
    6. The function $\lvert f\rvert$ is integrable on $[a,b]$ and $\left|\int_a^b f(x)\,dx\right| \;\le\; \int_a^b |f(x)|\,dx.$
    
    1.2.2 
    If $f$ is defined at $x=a$, we define $\int_a^a f(x)\,dx = 0$.
    
    **1.2.3 $\int_b^a f(x)\,dx$, a<b**
    If $f$ is integrable on an interval $[a,b]$, we define $\int_b^a f(x)\,dx = - \int_a^b f(x)\,dx.$
    
    **1.2.4 Separating the Domain of Integration**
    If $f$ is integrable on an interval I containing a, b, and c, then 
    $\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx$.
    
    **1.2.5** 
    Let $f$ be a bounded integrable function defined on $[-a,a]$.
    1. If $f$ is odd, then $\int_{-a}^a f(x)\,dx = 0$.
    2. If $f$ is even, then $\int_{-a}^a f(x)\,dx = 2 \int_{0}^a f(x)\,dx$.
    
- 1.3 Average Value of a Function
    
    **1.3.1 Average Value of a Continuous Function**
    If $f$ is continuous on $[a,b]$, then the average value of $f$ on $[a,b]$ is 
    $f_{\mathrm{avg}} = \frac{1}{b-a} \int_a^b f(x)\,dx$.
    
    **1.3.4 The Average Value Theorem (AVT)**
    If $f$ is continuous on $[a,b]$, then there exists at least one $c \in [a,b]$ such that 
    $f(c) = \frac{1}{b-a} \int_a^b f(x)\,dx$.
    
- 1.4 Fundamental Theorem of Calculus - Part I
    
    **1.4.1 Integral Function**
    Let $a \in \mathbb{R}$ and let $f$ be integrable on an interval I containing a. The function G : I → ℝ defined by $G(x) = \int_a^x f(t)\,dt$ is called an integral function.
    
    **1.4.3 The Fundamental Theorem of Calculus (FTC) - Part I**
    Let $a \in \mathbb{R}$. If $f$ is continuous on an open interval $I$ containing $a$, then the function $G(x) = \int_{a}^{x} f(t)\,dt$ is differentiable for all $x \in I$ and $G'(x) = f(x)$. 
    That is, $\frac{d}{dx} \int_{a}^{x} f(t)\,dt = f(x)$
    
    **1.4.5** 
    Let $a \in \mathbb{R}$. If $f$ is continuous and $h$ is differentiable, then 
    $\frac{d}{dx} \int_a^{h(x)} f(t)\,dt = f(h(x))\,h'(x)$.
    
    **1.4.7 Extended Version of the Fundamental Theorem of Calculus - Part I**
    If $f$ is continuous and $g$ and $h$ are differentiable, then 
    $\frac{d}{dx} \int_{g(x)}^{h(x)} f(t)\,dt
    = f(h(x))\,h'(x) - f(g(x))\,g'(x)$
    
- 1.5 Fundamental Theorem of Calculus - Part II
    
    **1.5.1 Antiderivative**
    Given a function 𝑓, an antiderivative of 𝑓 is a function 𝐹 such that 𝐹′ = 𝑓.
    
    **1.5.3 The Antiderivative Theorem**
    If F and G are antiderivatives of a function f on an open interval I, then there exists a constant C ∈ ℝ such that G(x) = F(x) + C.
    
    **1.5.7 Power Rule for Antiderivatives**
    For all real numbers $n$ with $n \neq -1$, 
    $\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$.
    
    **Some Common Antiderivatives**
    $\int \sin x \, dx = -\cos x + C$
    $\int \cos x \, dx = \sin x + C$
    $\int \sec^2 x \, dx = \tan x + C$
    $\int \sec x \tan x \, dx = \sec x + C$ 
    $\int \csc^2 x \, dx = -\cot x + C$
    $\int \csc x \cot x \, dx = -\csc x + C$
    
    $\int \frac{1}{1 + x^2} \, dx = \arctan x + C$
    $\int \frac{1}{\sqrt{1 - x^2}} \, dx = \arcsin x + C$ 
    $\int \frac{-1}{\sqrt{1 - x^2}} \, dx = \arccos x + C$ $\int \frac{1}{1 + x^2} \, dx = \arctan x + C$$\int e^x \, dx = e^x + C$
    $\int a^x \, dx = \frac{a^x}{\ln a} + C \quad (a > 0, \, a \neq 1)$  
    $\int \frac{1}{x} \, dx = \ln\lvert x\rvert + C$
    
    1.5.8 The Fundamental Theorem of Calculus (FTC) - Part II
    If $f$ is continuous on $[a,b]$ and $F$ is any antiderivative of $F$, then 
    $\int_a^b f(t)\,dt = F(b) - F(a)$
    
- 1.6 The Substitution Rule
    
    **1.6.1 Substitution Rule / Change of Variables**
    If $f$and $g$ are functions such that $g'$ is continuous on an interval $[a,b]$ and $f$ is continuous on the range of $g$, then 
    $\int f\bigl(g(x)\bigr)\,g'(x)\,dx
    = \int f(u)\,du \;\Bigg|_{u = g(x)}$
    
    **1.6.4 Integrating 𝑓(𝑎𝑥)**
    Let $a \in \mathbb{R}, a \neq 0$. If $\int f(x)\,dx = F(x) + C$, then 
    $\int f(ax)\,dx = \frac{1}{a}F(ax) + C$
    
    **1.6.7 Antiderivatives of $\sec x$ and $\csc x$** 
    $\int \sec x \, dx = \ln\bigl|\sec x + \tan x\bigr| + C$ and $\int \csc x \, dx = -\,\ln\bigl|\csc x + \cot x\bigr| + C$
    
    **1.6.8 Substitution Rule/Change of Variables for Definite Integrals**
    If $f$ and $g$ are functions such that $g'$ is continuous on an interval $[a,b]$, and $f$  is continuous on the range of $g$, then 
    $\int_{x=a}^{x=b} f\bigl(g(x)\bigr)\,g'(x)\,dx
    = \int_{u=g(a)}^{u=g(b)} f(u)\,du$
    
    **1.6.11 Antiderivatives of $\tan x$ and $\cot x$** 
    $\int \tan x \, dx = -\,\ln\lvert \cos x \rvert + C$ and $\int \cot x \, dx = \ln\lvert \sin x \rvert + C$
    
- 1.7 Trigonometric Substitution
    
    
    **Integral contain**
    
    **Substitution**
    
    **Domain**
    
    **Identity**
    
    $\sqrt{a^2 - x^2}$
    
    $x = a \sin \theta$
    
    $\theta \in \left[-\tfrac{\pi}{2}, \tfrac{\pi}{2}\right]$
    
    $1 - \sin^2\theta = \cos^2\theta$
    
    $\sqrt{x^2 - a^2}$
    
    $x = a \sec \theta$
    
    $\theta \in \left[0, \tfrac{\pi}{2}\right) \cup \left[\pi, \tfrac{3\pi}{2}\right)$
    
    $\sec^2\theta - 1 = \tan^2\theta$
    
    $\sqrt{x^2 + a^2}$
    
    $x = a \tan \theta$
    
    $\theta \in \left(-\tfrac{\pi}{2}, \tfrac{\pi}{2}\right)$
    
    $1 + \tan^2\theta = \sec^2\theta$
    
- 1.8 Integration by Parts
    
    **1.8.1 Integration by Parts (IBP)**
    If $f$ and $g$ are differentiable functions of $x$, then 
    $\int f(x)\,g'(x)\,dx = f(x)\,g(x) \;-\; \int f'(x)\,g(x)\,dx$
    
    **1.8.4 Integration by Parts for Definite Integrals**
    If $f(x)$ and $g(x$ are such that $f'(x)$ and $g'(x)$ are continuous on an interval containing $[a,b]$, then 
    $\int_a^b f(x)\,g'(x)\,dx
    = \bigl[f(x)\,g(x)\bigr]_a^b \;-\; \int_a^b f'(x)\,g(x)\,dx$
    
    **1.8.10 Reduction Formula for $\displaystyle \int \cos^n x \, dx$**
    For any $n \ge 2$, $\int \cos^n x \, dx
    = \frac{\cos^{n-1}(x)\,\sin x}{n}
    \;+\; \frac{n-1}{n}\,\int \cos^{n-2}(x)\,dx$
    
- 1.9 Partial Fractions
    
    **Method: Finding a PFD**
    
    Let $f(x) = \frac{P(x)}{Q(x)}$ where $P$ and $Q$ are polynomials and $\deg P(x) < \deg Q(x)$. To find the partial fraction decomposition for $f$, we carry out the following steps:
    
    1. Fully factor $Q(x)$ into a product of linear and irreducible quadratic factors.
    2. Based on the factors of $Q(x)$, write down the form of the partial fraction decomposition according to the table below. (Note: The A’s and B’s represent constants to be determined.)
    
    **Factor of** $Q(x)$
    
    $ax + b$
    
    $(ax + b)^m$
    
    $ax^2 + bx + c$ (irreducible)
    
    $(ax^2 + bx + c)^m$ (irreducible)
    
    **Term in the partial fraction decomposition**
    
    $\displaystyle \frac{A}{ax + b}$
    
    $\displaystyle \frac{A_1}{ax + b} + \frac{A_2}{(ax + b)^2} + \cdots + \frac{A_m}{(ax + b)^m}$
    
    $\displaystyle \frac{Ax + B}{ax^2 + bx + c}$
    
    $\displaystyle \frac{A_1 x + B_1}{ax^2 + bx + c} + \frac{A_2 x + B_2}{(ax^2 + bx + c)^2} + \cdots + \frac{A_m x + B_m}{(ax^2 + bx + c)^m}$
    
    1. Solve for any unknown constants in the partial fraction decomposition.
- 1.10 Improper Integrals
    
    **Type I Improper Integral**
    (i) Let *f* be integrable on [*a*, *t*] for all *t* ≥ *a*. The type I improper integral $\int_a^\infty f(x) dx$ converges if $\lim_{t \to \infty} \int_a^t f(x) dx$ exists, and we define: 
    $\int_a^\infty f(x) dx = \lim_{t \to \infty} \int_a^t f(x) dx$
    If the limit does not exist, we say that $\int_a^\infty f(x) dx$ diverges.
    (ii) Let *f* be integrable on [*t*, *b*] for all *t* ≤ *b*. The type I improper integral $\int_{-\infty}^b f(x) dx$ converges if $\lim_{t \to -\infty} \int_t^b f(x) dx$ exists, and we define:
    $\int_{-\infty}^b f(x) dx = \lim_{t \to -\infty} \int_t^b f(x) dx$
    If the limit does not exist, we say that$\int_{-\infty}^b f(x) dx$ diverges.
    
    **1.10.3 Convergence of p-Integrals of Type I
    -** If *p* > 1, the improper integral $\int_1^\infty \frac{1}{x^p} dx$ converges and $\int_1^\infty \frac{1}{x^p} dx = \frac{1}{p-1}$.
    - If *p* ≤ 1, the improper integral $\int_1^\infty \frac{1}{x^p} dx$ diverges.
    
    **Type I Improper Integral on (-∞, ∞)**
    Let *f* be integrable on [*a*, *b*] for all *a*, *b* ∈ ℝ with *a* ≤ *b*. If both $\int_{-\infty}^0 f(x) dx$ and $\int_0^\infty f(x) dx$ converge, we say the type I improper integral $\int_{-\infty}^\infty f(x) dx$ converges and define: 
    $\int_{-\infty}^\infty f(x) dx = \int_{-\infty}^0 f(x) dx + \int_0^\infty f(x) dx$ 
    If one or both of $\int_{-\infty}^0 f(x) dx$ or $\int_0^\infty f(x) dx$ diverge, we say that $\int_{-\infty}^\infty f(x) dx$ diverges.
    
    **Improper Integral of Type II**
    Let *a*, *b* ∈ ℝ with *a* < *b*.
    (i) Let *f* be integrable on [*t*, *b*] for all *t* ∈ (*a*, *b*] and suppose that *f* has an infinite discontinuity at *x* = *a*. If $\lim_{t \to a^+} \int_t^b f(x) dx$ exists, we say that the type II improper integral $\int_a^b f(x) dx$ converges and define:
    $\int_a^b f(x) dx = \lim_{t \to a^+} \int_t^b f(x) dx$
    If $\lim_{t \to a^+} \int_t^b f(x) dx$ does not exist, we say $\int_a^b f(x) dx$ diverges.
    (ii) Let *f* be integrable on [*a*, *t*] for all *t* ∈ [*a*, *b*) and suppose that *f* has an infinite discontinuity at *x* = *b*. If $\lim_{t \to b^-} \int_a^t f(x) dx$ exists, we say that the type II improper integral $\int_a^b f(x) dx$ converges and define:
    $\int_a^b f(x) dx = \lim_{t \to b^-} \int_a^t f(x) dx$
    If $\lim_{t \to b^-} \int_a^t f(x) dx$ does not exist, we say $\int_a^b f(x) dx$ diverges.
    (iii) Suppose that *f* has an infinite discontinuity at *x* = *c* with *a* < *c* < *b*. We say that the type II improper integral $\int_a^b f(x) dx$ converges if both $\int_a^c f(x) dx$and $\int_c^b f(x) dx$ converge. In this case, we define:
    $\int_a^b f(x) dx = \int_a^c f(x) dx + \int_c^b f(x) dx$
    If one or both of $\int_a^c f(x) dx$ or$\int_c^b f(x) dx$ diverge, we say that $\int_a^b f(x) dx$ diverges.
    
    ![Screenshot 2025-02-17 at 8.07.01 pm.png](1%20Integration%2019d115b71c1180e4a2d9cfaccafbf029/Screenshot_2025-02-17_at_8.07.01_pm.png)
    
    ![Screenshot 2025-02-17 at 8.07.08 pm.png](1%20Integration%2019d115b71c1180e4a2d9cfaccafbf029/Screenshot_2025-02-17_at_8.07.08_pm.png)
    
    **1.10.10 Convergence of p-Integrals of Type II
    -** If *p* < 1, the improper integral $\int_0^1 \frac{1}{x^p} dx$ converges and $\int_0^1 \frac{1}{x^p} dx = \frac{1}{1-p}$.
    - If *p* ≥ 1, the improper integral $\int_0^1 \frac{1}{x^p} dx$ diverges.
    
- 1.11 Area Between Curves
    
    **1.11.1 Area Between Curves**
    Let f and g be integrable functions defined on [a, b]. If $f(x) \ge g(x)$ for all $x \in [a,b]$, then the area between the graphs of f and g for $x \in [a,b]$ is given by 
    $\int_{a}^{b}(f(x)-g(x))dx$
    
- 1.12 Volumes of Solids of Revolution
    
    $Area = \int_{y=c}^{y=d}(x_{right}(y)-x_{left}(y))dy$
    
    $Area = \int_{x=a}^{x=b}(y_{upper}(x)-y_{lower}(x))dx$
    
    $V = \lim_{n\rightarrow\infty}\sum_{i=1}^{n}A(x_{i})\Delta x = \int_{a}^{b}A(x)dx$
    
    **Method: Choosing between Disks/Washers and Cylindrical Shells**
    
    1. **Revolving about a horizontal axis:**
    (i) If the region R can be described in terms of functions of x, use disks/washers:
    $V = \int_{x=a}^{x=b}(\pi(r_{outer})^{2}-\pi(r_{inner})^{2})dx$
    (ii) If the region R can be described in terms of functions of y, use cylindrical shells:
    $V = \int_{y=c}^{y=d}2\pi rh~dy$
    2. **Revolving about a vertical axis:**
    (i) If the region R can be described in terms of functions of x, use cylindrical shells:
    $V = \int_{x=b}^{x=a}2\pi rh~dx$
    (ii) if R can be described in terms of functions of y, the volume of the resulting solid
    can be calculated using disks/ washers:
    $V = \int_{y=c}^{y=d}(\pi(r_{outer})^{2}-\pi(r_{inner})^{2})dy$

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

    # 3. Numerical Series

- 3.1 Introduction to Series
    
    **3.1.1 Infinite Series**
    Let $\{a_n\}_{n=1}^{\infty}$ be a sequence of real numbers. An *infinite series* is a symbolic expression of the form $a_1 + a_2 + a_3 + a_4 + \cdots = \sum_{n=1}^{\infty} a_n.$
    
    **3.1.3 Partial Sum**
    Given an infinite series $\displaystyle \sum_{n=1}^{\infty} a_n$, we define its sequence of partial sums, $\{S_m\}_{m=1}^{\infty}$, as  $S_m \;=\; a_1 + a_2 + \cdots + a_m \;=\; \sum_{n=1}^m a_n$. $S_m$ is called the $m$-th partial sum of the infinite series. Note that $S_m$ is the sum of the initial terms in the sequence $\{a_n\}_{n=1}^{\infty}$ up to (and including) $a_m$.
    
    **3.1.5 Convergence and Divergence**
    We say that an infinite series $\displaystyle \sum_{n=1}^{\infty} a_n$ converges to $S \in \mathbb{R}$ if $\lim_{m \to \infty} S_m \;=\; \lim_{m \to \infty} \left(\sum_{n=1}^m a_n\right) \;=\; S$. Here, $S$ is called the sum of the infinite series, and we write $\sum_{n=1}^{\infty} a_n \;=\; S$. 
    If $\{S_m\}{m=1}^{\infty}$ diverges, then we say that $\displaystyle \sum{n=1}^{\infty} a_n$ diverges. Furthermore, if $\lim_{m \to \infty} S_m \;=\; \pm\infty$, then we say that $\displaystyle \sum_{n=1}^{\infty} a_n$diverges to $\pm\infty$.
    
    **3.1.10 Geometric Series**
    Let $a, x \in \mathbb{R}$ such that $a \neq 0$. A geometric series is a series of the form $\sum_{n=0}^{\infty} a x^n = a + ax + ax^2 + ax^3 + \cdots$. Here, $a$ is called the first term of the geometric series, and $x$ is called the ratio of the geometric series. We have chosen the convention that for a geometric series, the index $n$ starts at $n = 0$ instead of the usual $n = 1$.
    We define the $m$-th partial sum of the geometric series to be $S_m = \sum_{n=0}^m a x^n = a + ax + ax^2 + \cdots + ax^m.$
    Note that $S_m$ for a geometric series contains $m + 1$ terms instead of the usual $m$ terms. We have chosen the convention that the index $m$ in $S_m$ indicates that the sum stops at the $n = m$ term (and does *not* indicate that the number of terms in $S_m$ is $m$).
    
    **3.1.11 Geometric Series Test**
    Let $\displaystyle \sum_{n=0}^{\infty} a x^n$ be a geometric series, where $a \neq 0$.
    1. If $\lvert x \rvert < 1$, then $\displaystyle \sum_{n=0}^{\infty} a x^n$ converges and $\sum_{n=0}^{\infty} a x^n = \frac{a}{1 - x}$
    2. If $\lvert x \rvert \ge 1$, then $\displaystyle \sum_{n=0}^{\infty} a x^n$ diverges.
    
- 3.2 Arithmetic Properties of Series and the Divergence Test
    
    **3.2.1 Linearity of Infinite Series**
    Suppose that $\displaystyle \sum_{n=1}^{\infty} a_n = A$ and $\displaystyle \sum_{n=1}^{\infty} b_n = B$, where $A, B \in \mathbb{R}$.
    1. For any $c \in \mathbb{R}$, $\sum_{n=1}^{\infty} c\,a_n = cA$
    2. $\sum_{n=1}^{\infty} (a_n \pm b_n) = A \pm B$
    
    **3.2.2 Tail**
    Given an infinite series $(\displaystyle \sum_{n=1}^{\infty} a_n$, let $S_m \;=\; a_1 \;+\; a_2 \;+\; \cdots \;+\; a_m$ denote its $m$-th partial sum. 
    The difference $\Bigl(\sum_{n=1}^{\infty} a_n\Bigr) \;-\; S_m
    \;=\; a_{m+1} \;+\; a_{m+2} \;+\; a_{m+3} \;+\; \cdots
    \;=\; \sum_{n=m+1}^{\infty} a_n$ is called a **tail** of the infinite series $\displaystyle \sum_{n=1}^{\infty} a_n$.
    
    **3.2.3 Tail Convergence Theorem**
    Let $\{a_n\}_{n=1}^{\infty}$ be a sequence and let $j$ denote a positive integer.
    1. If $\sum_{n=1}^{\infty} a_n$ converges, then its tail $\sum_{n=j}^{\infty} a_n$ also converges for each $j \ge 1$.
    2. If the tail $\sum_{n=j}^{\infty} a_n$ converges for some $j$, then $\sum_{n=1}^{\infty} a_n$ also converges.
    
    **3.2.4 Tail Divergence Theorem**
    Let $j$ denote a positive integer.
    1. If a tail $\sum_{n=j}^{\infty} a_n$ diverges for some $j$, then the original series $\sum_{n=1}^{\infty} a_n$ diverges too.
    2. If $\sum_{n=1}^{\infty} a_n$$ diverges, then its tail $\sum_{n=j}^{\infty} a_n$ diverges for each $j \ge 1$.
    
    **3.2.5 Necessary Condition for Convergence**
    If $\sum_{n=1}^{\infty} a_n$ converges, then $\lim_{n \to \infty} a_n = 0$.
    
    **3.2.6 Divergence Test**
    If $\lim_{n \to \infty} a_n \neq 0$, then $\displaystyle \sum_{n=1}^{\infty} a_n$ diverges.
    
- 3.3 Integral Test
    
    **3.3.1 Positive Series**
    An infinite series $\sum_{n=1}^{\infty} a_n$ is said to be **positive** (or **nonnegative**) if $a_n \ge 0$ for all $n \ge 1$.
    It is said to be **strictly positive** if $a_n > 0$ for all $n \ge 1$.
    It is said to be **eventually positive** (or **eventually nonnegative**) if there is a positive integer $j$ such that $a_n \ge 0$ for all $n \ge j$.
    Finally, it is said to be **eventually strictly positive** if there is a positive integer $j$ such that $a_n > 0$ for all $n \ge j$.
    
    **3.3.2** 
    Let $\sum_{n=1}^{\infty} a_n$ be an eventually positive series. Let $S_m = \sum_{n=1}^{m} a_n$ denote its $m$-th partial sum.
    Then there are only two possibilities:
    1. If the sequence of partial sums $\{S_m\}{m=1}^{\infty}$ is bounded from above, then $\sum{n=1}^{\infty} a_n$ converges.
    2. If the sequence of partial sums $\{S_m\}{m=1}^{\infty}$ is not bounded from above, then $\sum{n=1}^{\infty} a_n$ diverges to $\infty$.
    
    **3.3.3 Integral Test**
    Suppose that a function $f$ is continuous, positive, and decreasing on the infinite interval $[k, \infty)$ for some positive integer $k$. Then the following statements hold:
    1. If $\displaystyle \int_{k}^{\infty} f(x)\,dx$ converges, then the infinite series $\displaystyle \sum_{n=1}^{\infty} f(n)$ converges.
    2. If $\displaystyle \int_{k}^{\infty} f(x)\,dx$ diverges, then the infinite series $\displaystyle \sum_{n=1}^{\infty} f(n)$ diverges to $\infty$.
    
    **3.3.5 p-Series Test**
    Let *p* be a real number. An infinite series of the form $\sum_{n=1}^{\infty} \frac{1}{n^p}$ is called a *p*-series.
    1. If $p > 1$, then the corresponding *p*-series $\sum_{n=1}^{\infty} \frac{1}{n^p}$ converges.
    2. If $p ≤ 1$, then the corresponding *p*-series $\sum_{n=1}^{\infty} \frac{1}{n^p}$ diverges.
    
    **3.3.7 Integral Test Estimation Theorem**
    Suppose that a function *f* is continuous, positive, and decreasing on the infinite interval $[k, ∞)$ for some positive integer $k$. Further suppose that $\int_k^{\infty} f(x) dx$ converges so that $\sum_{n=1}^{\infty} f(n) = S$ for some real number $S$ by the Integral Test. Let $S_m = \sum_{n=1}^{m} f(n)$denote the $m$-th partial sum. Then for any integer $m \geq k$, we have $\int_{m+1}^{\infty} f(x) dx \leq S - S_m \leq \int_m^{\infty} f(x) dx$ .
    
- 3.4 Comparison Test and Limit Comparison Test
    
    **3.4.1 Comparison Test**
    Let $k$ be a positive integer. Suppose that $\{a_n\}_{n=1}^{\infty}$ and $\{b_n\}_{n=1}^{\infty}$ are two sequences satisfying $0 \leq a_n \leq b_n$ for every $n \geq k$.
    1. If $\sum_{n=1}^{\infty} b_n$ converges, then $\sum_{n=1}^{\infty} a_n$ converges too.
    2. If $\sum_{n=1}^{\infty} a_n$ diverges, then $\sum_{n=1}^{\infty} b_n$ diverges too.
    
    **3.4.3 Limit Comparison Test**
    Let $k$ be a positive integer. Suppose that $\{a_n\}{n=1}^{\infty}$ *and $\{b_n\}{n=1}^{\infty}$* are two sequences satisfying $a_n \geq 0$ and $b_n > 0$ for every $n \geq k$. Let $L = \lim_{n \to \infty} \frac{a_n}{b_n}$. 
    Then there are only four possibilities.
    1. If $0 < L < \infty$, then either $\sum_{n=1}^{\infty} a_n$ and $\sum_{n=1}^{\infty} b_n$ both converge or both diverge.
    2. If $L = 0$, then there is a positive integer $j$ such that $a_n < b_n$ for every $n \geq j$. Consequently, if $\sum_{n=1}^{\infty} b_n$converges, then $\sum_{n=1}^{\infty} a_n$ converges too. If $\sum_{n=1}^{\infty} a_n$ diverges, then $\sum_{n=1}^{\infty} b_n$ diverges too.
    3. If $L = \infty$, then there is a positive integer $j$ such that $a_n > b_n$ for every $n \geq j$. Consequently, if $\sum_{n=1}^{\infty} a_n$ converges, then $\sum_{n=1}^{\infty} b_n$ converges too. If $\sum_{n=1}^{\infty} b_n$ diverges, then $\sum_{n=1}^{\infty} a_n$ diverges too.
    4. If we know that the limit $L$ does not exist, then no conclusion can be drawn solely from that knowledge.
    
- 3.5 Alternating Series Test
    
    **3.5.1 Alternating Series**
    Let $\{a_n\}_{n=1}^{\infty}$ be a strictly positive sequence, i.e., $a_n > 0$  for each integer $n \geq 1$. An alternating series is an infinite series that is in one of the following two forms:
    1. $\sum_{n=1}^{\infty} (-1)^{n-1} a_n = a_1 - a_2 + a_3 - a_4 + \cdots$, or
    2.  $\sum_{n=1}^{\infty} (-1)^n a_n = -a_1 + a_2 - a_3 + a_4 - \cdots = -(a_1 - a_2 + a_3 - a_4 + \cdots) = - \sum_{n=1}^{\infty} (-1)^{n-1} a_n$
    
    **3.5.3** 
    An alternating series $\sum_{n=1}^{\infty} (-1)^{n-1} a_n$ converges (to a real number $S$) if and only if its negative $\sum_{n=1}^{\infty} (-1)^n a_n$ converges (to $-S$).
    
    **3.5.4 Alternating Series Test**
    Let $\{a_n\}_{n=1}^{\infty}$ be a sequence satisfying the following two conditions.
    1. $\lim_{n \to \infty} a_n = 0$. 
    2. There is a positive integer $k$ such that $a_n \geq a_{n+1} > 0$ for every $n \geq k$. In other words, $\{a_n\}_{n=1}^{\infty}$ is eventually decreasing (or eventually non-increasing) and eventually strictly positive.
    Then $\sum_{n=1}^{\infty} (-1)^{n-1} a_n$ and $\sum_{n=1}^{\infty} (-1)^n a_n$ both converge.
    
    **3.5.7 Alternating Series Estimation Theorem**
    Let $\{a_n\}_{n=1}^{\infty}$ be a sequence that satisfies the hypotheses 1. and 2.  of the Alternating Series Test (Theorem 3.5.4) so that the corresponding alternating series $\sum{n=1}^{\infty} (-1)^{n-1} a_n$ and $\sum_{n=1}^{\infty} (-1)^n a_n$ converge to real numbers $S$ and $T$, respectively. Let $S_m = \sum_{n=1}^{m} (-1)^{n-1} a_n$ denote the $m$-th partial sum of $S = \sum_{n=1}^{\infty} (-1)^{n-1} a_n$. Let $T_m = \sum_{n=1}^{m} (-1)^n a_n$ denote the $m$-th partial sum of $T = \sum_{n=1}^{\infty} (-1)^n a_n$. Suppose that $m \geq k$, where $k$ is the positive integer in the hypothesis 2. of the Alternating Series Test. Then we can conclude the following.
    1. $|S - S_m| \leq a_{m+1}$ and $|T - T_m| \leq a_{m+1}$.
    2. If $m$ is even, then $S_m$ is an underestimate of $S$ and $T_m$ is an overestimate of $T$.
    3. If $m$ is odd, then $S_m$ is an overestimate of $S$ and $T_m$ is an underestimate of $T$.
    
- 3.6 Absolute and Conditional Convergence
    
    **3.6.1 Absolute Convergence**
    Given an infinite series $\sum_{n=1}^{\infty} a_n$, its absolutization is the infinite series $\sum_{n=1}^{\infty} |a_n|$. We say that the series $\sum_{n=1}^{\infty} a_n$ converges absolutely if its absolutization $\sum_{n=1}^{\infty} |a_n|$ converges.
    
    **3.6.3 Absolute Convergence Test**
    If $\sum_{n=1}^{\infty} |a_n|$ converges, then $\sum_{n=1}^{\infty} a_n$ converges.
    
    **3.6.4 Conditional Convergence**
    We say that an infinite series $\sum_{n=1}^{\infty} a_n$ converges conditionally if it converges but its absolutization $\sum_{n=1}^{\infty} |a_n|$ diverges.
    
- 3.7 Ratio Test and Root Test
    
    **3.7.1 Ratio Test**
    Let $k$ be a positive integer. Suppose that $\{a_n\}_{n=1}^{\infty}$ is a sequence satisfying $a_n \neq 0$ for every $n \geq k$. Let $L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right|$
    Further, suppose that either $L \in \mathbb{R}$ or $L = \infty$.
    1. If $L < 1$, then $\sum_{n=1}^{\infty} a_n$ converges absolutely.
    2. If $L > 1$ or if $L = \infty$, then $\sum_{n=1}^{\infty} a_n$ diverges.
    3. If we know that $L = 1$, then no conclusion can be drawn solely from that knowledge.
    
    **3.7.5 Root Test**
    Let $L = \lim_{n \to \infty} \sqrt[n]{|a_n|}$, and suppose that $L \in \mathbb{R}$ or $L = \infty$.
    1. If $L < 1$, then $\sum_{n=1}^{\infty} a_n$ converges absolutely.
    2. If $L > 1$ or if $L = \infty$, then $\sum_{n=1}^{\infty} a_n$ diverges.
    3. If we know that $L = 1$, then no conclusion can be drawn solely from that knowledge.

# 4. Power Series

- 4.1 Introduction to Power Series
- 4.2 Representing Functions as Power Series
- 4.3 Differentiating and Integrating Power Series
- 4.4 Taylor Series and Taylor Polynomials
- 4.5 Some Examples of Taylor Series
- 4.6 Binomial Series
- 4.7 Applications of Taylor Series
- 4.8 Big-O Notation