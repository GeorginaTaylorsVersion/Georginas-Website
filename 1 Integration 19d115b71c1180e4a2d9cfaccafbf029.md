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