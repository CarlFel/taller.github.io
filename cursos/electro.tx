
\section{Análisis Vectorial}
\subsection{Álgebra de Vectores}
\begin{itemize}
    \item \textbf{Operaciones básicas}:
    \begin{align*}
        \mathbf{A} + \mathbf{B} &= (A_x + B_x)\vectorunitario{x} + (A_y + B_y)\vectorunitario{y} + (A_z + B_z)\vectorunitario{z} \\
        \mathbf{A} \cdot \mathbf{B} &= A_xB_x + A_yB_y + A_zB_z = |\mathbf{A}||\mathbf{B}|\cos\theta \\
        \mathbf{A} \times \mathbf{B} &= \begin{vmatrix}
        \vectorunitario{x} & \vectorunitario{y} & \vectorunitario{z} \\
        A_x & A_y & A_z \\
        B_x & B_y & B_z
        \end{vmatrix}
    \end{align*}
    
    \item \textbf{Identidades clave}:
    \begin{align*}
        \mathbf{A} \times (\mathbf{B} \times \mathbf{C}) &= \mathbf{B}(\mathbf{A} \cdot \mathbf{C}) - \mathbf{C}(\mathbf{A} \cdot \mathbf{B}) \\
        \nabla \times (\nabla \phi) &= 0 \\
        \nabla \cdot (\nabla \times \mathbf{A}) &= 0
    \end{align*}
\end{itemize}

\subsection{Cálculo Diferencial Vectorial}
\begin{itemize}
    \item \textbf{Gradiente} (campo escalar $\rightarrow$ vectorial):
    \[
    \nabla \phi = \frac{\partial \phi}{\partial x}\vectorunitario{x} + \frac{\partial \phi}{\partial y}\vectorunitario{y} + \frac{\partial \phi}{\partial z}\vectorunitario{z}
    \]
    
    \item \textbf{Divergencia} (campo vectorial $\rightarrow$ escalar):
    \[
    \nabla \cdot \mathbf{A} = \frac{\partial A_x}{\partial x} + \frac{\partial A_y}{\partial y} + \frac{\partial A_z}{\partial z}
    \]
    
    \item \textbf{Rotacional} (campo vectorial $\rightarrow$ vectorial):
    \[
    \nabla \times \mathbf{A} = \left(\frac{\partial A_z}{\partial y} - \frac{\partial A_y}{\partial z}\right)\vectorunitario{x} + \left(\frac{\partial A_x}{\partial z} - \frac{\partial A_z}{\partial x}\right)\vectorunitario{y} + \left(\frac{\partial A_y}{\partial x} - \frac{\partial A_x}{\partial y}\right)\vectorunitario{z}
    \]
\end{itemize}

\subsection{Cálculo Integral Vectorial}
\begin{itemize}
    \item \textbf{Teorema de la Divergencia (Gauss)}:
    \[
    \int_V (\nabla \cdot \mathbf{A}) \dif V = \oint_S \mathbf{A} \cdot \dif \mathbf{S}
    \]
    
    \item \textbf{Teorema de Stokes}:
    \[
    \int_S (\nabla \times \mathbf{A}) \cdot \dif \mathbf{S} = \oint_C \mathbf{A} \cdot \dif \mathbf{l}
    \]
    
    \item \textbf{Teorema del Gradiente}:
    \[
    \int_V \nabla \phi \dif V = \oint_S \phi \dif \mathbf{S}
    \]
\end{itemize}

\subsection{Coordenadas Cilíndricas $(\rho, \phi, z)$}
\begin{itemize}
    \item \textbf{Relación con cartesianas}:
    \[
    x = \rho\cos\phi, \quad y = \rho\sin\phi, \quad z = z
    \]
    
    \item \textbf{Elementos diferenciales}:
    \begin{align*}
        \dif \mathbf{l} &= \dif \rho\,\vectorunitario{\rho} + \rho \dif \phi\,\vectorunitario{\phi} + \dif z\,\vectorunitario{z} \\
        \dif V &= \rho \dif \rho \dif \phi \dif z
    \end{align*}
    
    \item \textbf{Operadores diferenciales}:
    \[
    \nabla \cdot \mathbf{A} = \frac{1}{\rho}\frac{\partial}{\partial \rho}(\rho A_\rho) + \frac{1}{\rho}\frac{\partial A_\phi}{\partial \phi} + \frac{\partial A_z}{\partial z}
    \]
\end{itemize}

\subsection{Coordenadas Esféricas $(r, \theta, \phi)$}
\begin{itemize}
    \item \textbf{Relación con cartesianas}:
    \[
    x = r\sin\theta\cos\phi, \quad y = r\sin\theta\sin\phi, \quad z = r\cos\theta
    \]
    
    \item \textbf{Elementos diferenciales}:
    \begin{align*}
        \dif \mathbf{l} &= \dif r\,\vectorunitario{r} + r \dif \theta\,\vectorunitario{\theta} + r\sin\theta \dif \phi\,\vectorunitario{\phi} \\
        \dif V &= r^2 \sin\theta \dif r \dif \theta \dif \phi
    \end{align*}
    
    \item \textbf{Laplaciano}:
    \[
    \nabla^2 \phi = \frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2 \frac{\partial \phi}{\partial r}\right) + \frac{1}{r^2\sin\theta}\frac{\partial}{\partial \theta}\left(\sin\theta \frac{\partial \phi}{\partial \theta}\right) + \frac{1}{r^2\sin^2\theta}\frac{\partial^2 \phi}{\partial \phi^2}
    \]
\end{itemize}

\subsection{Función Delta de Dirac}
\begin{itemize}
    \item \textbf{Definición en 1D}:
    \[
    \delta(x - a) = 0 \quad \text{para} \quad x \neq a \quad \text{y} \quad \int_{-\infty}^\infty \delta(x - a) \dif x = 1
    \]
    
    \item \textbf{Propiedad de filtrado}:
    \[
    \int_{-\infty}^\infty f(x)\delta(x - a) \dif x = f(a)
    \]
    
    \item \textbf{Delta en 3D (coordenadas cartesianas)}:
    \[
    \delta^3(\mathbf{r} - \mathbf{r}') = \delta(x - x')\delta(y - y')\delta(z - z')
    \]
    
    \item \textbf{Representaciones útiles}:
    \begin{align*}
        \delta(x) &= \frac{1}{2\pi} \int_{-\infty}^\infty e^{ikx} \dif k \\
        \delta(\mathbf{r}) &= -\frac{1}{4\pi} \nabla^2 \left(\frac{1}{r}\right)
    \end{align*}
\end{itemize}





\section{Electrostática}
\subsection{El Campo Eléctrico}
\subsubsection{Introducción}
\begin{itemize}
    \item Definición de campo eléctrico $\mathbf{E}$ como fuerza por unidad de carga:
    \[
    \mathbf{E} = \lim_{q\to 0} \frac{\mathbf{F}}{q}
    \]
    \item Principio de superposición: $\mathbf{E}_{\text{total}} = \sum_i \mathbf{E}_i$
\end{itemize}

\subsubsection{Ley de Coulomb}
\[
\mathbf{F} = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_2}{r^2} \vectorunitario{r} \quad \text{y} \quad \mathbf{E} = \frac{1}{4\pi\epsilon_0} \frac{q}{r^2} \vectorunitario{r}
\]

\subsubsection{Campo Eléctrico}
\begin{itemize}
    \item Para $N$ cargas puntuales:
    \[
    \mathbf{E}(\mathbf{r}) = \frac{1}{4\pi\epsilon_0} \sum_{i=1}^N \frac{q_i}{|\mathbf{r} - \mathbf{r}_i|^2} \vectorunitario{R}_i
    \]
    \item Para distribuciones continuas:
    \[
    \mathbf{E}(\mathbf{r}) = \frac{1}{4\pi\epsilon_0} \int \frac{\rho(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|^2} \vectorunitario{R} \dif \tau'
    \]
\end{itemize}

\subsubsection{Distribuciones Continuas de Carga}
\begin{itemize}
    \item Densidades de carga:
    \[
    \rho = \frac{\dif q}{\dif V}, \quad \sigma = \frac{\dif q}{\dif A}, \quad \lambda = \frac{\dif q}{\dif l}
    \]
    \item Campos característicos:
    \begin{align*}
        \text{Línea infinita:} \quad \mathbf{E} &= \frac{\lambda}{2\pi\epsilon_0 \rho} \vectorunitario{\rho} \\
        \text{Plano infinito:} \quad \mathbf{E} &= \frac{\sigma}{2\epsilon_0} \vectorunitario{n}
    \end{align*}
\end{itemize}

\subsection{Divergencia y Rotor de Campos Electrostáticos}
\subsubsection{Líneas de Campo}
\begin{itemize}
    \item Propiedades:
    \begin{itemize}
        \item Salen de cargas positivas, entran a negativas
        \item Nunca se cruzan
        \item Densidad proporcional a $|\mathbf{E}|$
    \end{itemize}
\end{itemize}

\subsubsection{Flujo Eléctrico}
\[
\Phi_E = \int_S \mathbf{E} \cdot \dif \mathbf{S} \quad \text{(Unidades: V·m)}
\]

\subsubsection{Ley de Gauss}
\[
\oint_S \mathbf{E} \cdot \dif \mathbf{S} = \frac{Q_{\text{enc}}}{\epsilon_0} \quad \text{(Forma integral)}
\]
\[
\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0} \quad \text{(Forma diferencial)}
\]

\subsubsection{Rotor de $\mathbf{E}$}
\[
\nabla \times \mathbf{E} = 0 \quad \text{(Campo conservativo)}
\]

\subsection{Potencial Eléctrico}
\subsubsection{Introducción al Potencial}
\[
V(\mathbf{r}) = -\int_{\mathcal{O}}^{\mathbf{r}} \mathbf{E} \cdot \dif \mathbf{l} \quad \text{y} \quad \mathbf{E} = -\nabla V
\]

\subsubsection{Ecuación de Poisson y Laplace}
\[
\nabla^2 V = -\frac{\rho}{\epsilon_0} \quad \text{y} \quad \nabla^2 V = 0 \quad (\text{en regiones sin carga})
\]

\subsubsection{Potencial de una Distribución Localizada}
\[
V(\mathbf{r}) = \frac{1}{4\pi\epsilon_0} \int \frac{\rho(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|} \dif \tau'
\]

\subsubsection{Condiciones de Contorno}
\begin{itemize}
    \item En interfases:
    \[
    V_1 = V_2 \quad \text{y} \quad \epsilon_1 \frac{\partial V_1}{\partial n} - \epsilon_2 \frac{\partial V_2}{\partial n} = \sigma_f
    \]
\end{itemize}

\subsection{Trabajo y Energía Electrostática}
\subsubsection{Trabajo para Mover una Carga}
\[
W = q \Delta V \quad \text{(Trabajo contra el campo)}
\]

\subsubsection{Energía de una Distribución Puntual}
\[
U = \frac{1}{4\pi\epsilon_0} \frac{1}{2} \sum_{i=1}^N \sum_{\substack{j=1 \\ j \neq i}}^N \frac{q_i q_j}{|\mathbf{r}_i - \mathbf{r}_j|}
\]

\subsubsection{Energía de una Distribución Continua}
\[
U = \frac{\epsilon_0}{2} \int_{\text{todo el espacio}} |\mathbf{E}|^2 \dif \tau \quad \text{(Densidad de energía: } u_E = \frac{\epsilon_0}{2} E^2)
\]

\subsection{Conductores}
\subsubsection{Propiedades Básicas}
\begin{itemize}
    \item $\mathbf{E}_{\text{int}} = 0$ en equilibrio
    \item $\rho_{\text{int}} = 0$ (carga solo en superficie)
    \item $V$ constante en todo el conductor
\end{itemize}

\subsubsection{Cargas Inducidas}
\[
\sigma_{\text{inducida}} = -\epsilon_0 \frac{\partial V}{\partial n}
\]

\subsubsection{Carga Superficial y Fuerza}
\[
\mathbf{F} = \frac{\sigma^2}{2\epsilon_0} \vectorunitario{n} \quad \text{(Presión electrostática)}
\]

\subsubsection{Capacitores}
\begin{itemize}
    \item Definición de capacitancia:
    \[
    C = \frac{Q}{\Delta V}
    \]
    \item Ejemplos:
    \begin{align*}
        \text{Placas paralelas:} \quad C &= \frac{\epsilon_0 A}{d} \\
        \text{Cilíndrico:} \quad C &= \frac{2\pi\epsilon_0 L}{\ln(b/a)} \\
        \text{Esférico:} \quad C &= 4\pi\epsilon_0 \frac{ab}{b-a}
    \end{align*}
\end{itemize}






\section{Potenciales}
\subsection{Ecuación de Laplace}
\subsubsection{Introducción}
\begin{itemize}
    \item Forma general en electrostática:
    \[ \nabla^2 V = 0 \quad \text{(Regiones sin carga libre)} \]
    \item Relación con unicidad de soluciones
\end{itemize}

\subsubsection{1 Dimensión}
\[ \frac{d^2V}{dx^2} = 0 \Rightarrow V(x) = mx + b \]
\begin{itemize}
    \item Ejemplo: Potencial entre placas paralelas
\end{itemize}

\subsubsection{2 Dimensiones}
\[ \frac{\partial^2 V}{\partial x^2} + \frac{\partial^2 V}{\partial y^2} = 0 \]
\begin{itemize}
    \item Soluciones mediante funciones armónicas
    \item Ejemplo: Esquina conductora a 90°
\end{itemize}

\subsubsection{3 Dimensiones}
\[ \nabla^2 V = \frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial V}{\partial r}\right) + \frac{1}{r^2\sin\theta}\frac{\partial}{\partial \theta}\left(\sin\theta\frac{\partial V}{\partial \theta}\right) + \frac{1}{r^2\sin^2\theta}\frac{\partial^2 V}{\partial \phi^2} = 0 \]

\subsubsection{Condiciones de Borde y Teorema de Unicidad}
\begin{itemize}
    \item Tipos de condiciones:
    \begin{itemize}
        \item Dirichlet ($V$ especificado)
        \item Neumann ($\partial V/\partial n$ especificado)
    \end{itemize}
    \item \textbf{Teorema}: La solución es única si:
    \[ V \text{ especificado en todas las superficies} \quad \text{(Dirichlet)} \]
    \[ \text{o} \quad \frac{\partial V}{\partial n} \text{ especificado + } V \text{ constante en alguna superficie} \quad \text{(Neumann)} \]
\end{itemize}

\subsubsection{Conductores y Segundo Teorema de Unicidad}
\begin{itemize}
    \item En sistemas con conductores, la solución es única si:
    \begin{itemize}
        \item Se especifica $V$ o $Q$ en cada conductor
        \item Condiciones en superficies no conductoras
    \end{itemize}
\end{itemize}

\subsection{Método de Imágenes}
\subsubsection{Problema Clásico de Imagen}
\begin{itemize}
    \item Carga puntual sobre plano conductor:
    \[ V(x,y,z) = \frac{1}{4\pi\epsilon_0}\left[\frac{q}{\sqrt{x^2+y^2+(z-d)^2}} - \frac{q}{\sqrt{x^2+y^2+(z+d)^2}}\right] \]
    \item Imagen: carga $-q$ en $z=-d$
\end{itemize}

\subsubsection{Cargas Superficiales Inducidas}
\[ \sigma = -\epsilon_0 \left.\frac{\partial V}{\partial n}\right|_{\text{superficie}} \]
\begin{itemize}
    \item Para carga sobre plano:
    \[ \sigma(x,y) = \frac{-qd}{2\pi(x^2 + y^2 + d^2)^{3/2}} \]
\end{itemize}

\subsubsection{Fuerza y Energía}
\begin{itemize}
    \item Fuerza sobre la carga real:
    \[ F = \frac{1}{4\pi\epsilon_0}\frac{q^2}{(2d)^2} \]
    \item Energía del sistema:
    \[ U = -\frac{1}{4\pi\epsilon_0}\frac{q^2}{2d} \]
\end{itemize}

\subsubsection{Otros Problemas de Imágenes}
\begin{itemize}
    \item Carga y esfera conductora (radio $R$, distancia $d$):
    \[ q' = -\frac{R}{d}q \quad \text{en} \quad d' = \frac{R^2}{d} \]
    \item Dos esferas conductoras en ángulo
\end{itemize}

\subsection{Separación de Variables}
\subsubsection{Coordenadas Cartesianas}
\[ V(x,y,z) = X(x)Y(y)Z(z) \]
\begin{itemize}
    \item Ecuación resultante:
    \[ \frac{1}{X}\frac{d^2X}{dx^2} + \frac{1}{Y}\frac{d^2Y}{dy^2} + \frac{1}{Z}\frac{d^2Z}{dz^2} = 0 \]
    \item Soluciones típicas: $\sin(kx)$, $\cos(kx)$, $e^{\pm kx}$
\end{itemize}

\subsubsection{Coordenadas Cilíndricas}
\[ V(\rho,\phi,z) = R(\rho)\Phi(\phi)Z(z) \]
\begin{itemize}
    \item Soluciones generales:
    \[ \Phi(\phi) = e^{\pm im\phi}, \quad Z(z) = e^{\pm kz} \]
    \[ R(\rho) = \begin{cases}
    J_m(k\rho) & \text{(Bessel)} \\
    N_m(k\rho) & \text{(Neumann)}
    \end{cases} \]
\end{itemize}

\subsubsection{Coordenadas Esféricas}
\[ V(r,\theta,\phi) = R(r)\Theta(\theta)\Phi(\phi) \]
\begin{itemize}
    \item Armónicos esféricos:
    \[ Y_l^m(\theta,\phi) = P_l^m(\cos\theta)e^{im\phi} \]
    \item Solución radial:
    \[ R(r) = Ar^l + \frac{B}{r^{l+1}} \]
\end{itemize}

\subsection{Expansión Multipolar}
\subsubsection{Potenciales a Largas Distancias}
\[ V(\mathbf{r}) \approx \frac{1}{4\pi\epsilon_0}\left[\frac{Q}{r} + \frac{\mathbf{p}\cdot\vectorunitario{r}}{r^2} + \frac{1}{2}\sum_{i,j} \frac{Q_{ij}\hat{r}_i\hat{r}_j}{r^3} + \cdots\right] \]

\subsubsection{Monopolo y Dipolo}
\begin{itemize}
    \item Término monopolar ($l=0$):
    \[ V_{\text{mon}} = \frac{1}{4\pi\epsilon_0}\frac{Q}{r} \]
    \item Término dipolar ($l=1$):
    \[ V_{\text{dip}} = \frac{1}{4\pi\epsilon_0}\frac{\mathbf{p}\cdot\vectorunitario{r}}{r^2} \]
    donde $\mathbf{p} = \int \rho(\mathbf{r}')\mathbf{r}' d\tau'$
\end{itemize}

\subsubsection{Orígenes en Expansiones Multipolares}
\begin{itemize}
    \item El monopolo no depende del origen
    \item El dipolo sí depende (excepto si $Q=0$)
    \item Ejemplo: Dos cargas $\pm q$ desplazadas del origen
\end{itemize}

\subsubsection{Campo Eléctrico de un Dipolo}
\[ \mathbf{E}_{\text{dip}} = \frac{1}{4\pi\epsilon_0}\left[\frac{3(\mathbf{p}\cdot\vectorunitario{r})\vectorunitario{r} - \mathbf{p}}{r^3}\right] \]
\begin{itemize}
    \item En coordenadas polares:
    \[ E_r = \frac{2p\cos\theta}{4\pi\epsilon_0 r^3}, \quad E_\theta = \frac{p\sin\theta}{4\pi\epsilon_0 r^3} \]
\end{itemize}





\section{Campos Eléctricos en la Materia}
\subsection{Polarización}
\subsubsection{Dieléctricos}
\begin{itemize}
    \item Materiales no conductores que se polarizan bajo campo eléctrico
    \item Dos mecanismos fundamentales:
    \begin{itemize}
        \item \textbf{Deformación}: Distorsión de nubes electrónicas (dipolos inducidos)
        \item \textbf{Orientación}: Alineamiento de dipolos permanentes
    \end{itemize}
\end{itemize}

\subsubsection{Dipolos Inducidos}
\[
\mathbf{p} = \alpha \mathbf{E}_{\text{local}}
\]
\begin{itemize}
    \item $\alpha$ = polarizabilidad atómica/molecular (unidades: C·m²/V)
    \item Para átomo de hidrógeno: $\alpha = 4\pi\epsilon_0 a_0^3$ ($a_0$ = radio de Bohr)
\end{itemize}

\subsubsection{Alineamiento en Moléculas Polares}
\begin{itemize}
    \item Energía de interacción dipolo-campo:
    \[
    U = -\mathbf{p} \cdot \mathbf{E}
    \]
    \item Polarización por orientación (Langevin):
    \[
    \langle p \rangle = p \left(\coth x - \frac{1}{x}\right), \quad x = \frac{pE}{k_B T}
    \]
\end{itemize}

\subsubsection{Polarización}
\[
\mathbf{P} = \text{Densidad de momento dipolar} = \lim_{\Delta V \to 0} \frac{\sum \mathbf{p}_i}{\Delta V}
\]
\begin{itemize}
    \item Relación con campo aplicado:
    \[
    \mathbf{P} = \epsilon_0 \chi_e \mathbf{E} \quad (\text{Lineal})
    \]
    \item $\chi_e$ = Susceptibilidad eléctrica (adimensional)
\end{itemize}

\subsection{Campo de un Objeto Polarizado}
\subsubsection{Bound Charges}
\begin{itemize}
    \item Densidad volumétrica:
    \[
    \rho_b = -\nabla \cdot \mathbf{P}
    \]
    \item Densidad superficial:
    \[
    \sigma_b = \mathbf{P} \cdot \vectorunitario{n}
    \]
\end{itemize}

\subsubsection{Interpretación Física}
\begin{itemize}
    \item $\rho_b$ surge por acumulación neta de carga en el volumen
    \item $\sigma_b$ representa carga no compensada en superficie
    \item Ejemplo: Esfera uniformemente polarizada
\end{itemize}

\subsubsection{Campo Eléctrico Dentro de un Dieléctrico}
\[
\mathbf{E} = \mathbf{E}_{\text{ext}} + \mathbf{E}_{\text{pol}}
\]
\begin{itemize}
    \item Campo local (Lorentz):
    \[
    \mathbf{E}_{\text{local}} = \mathbf{E} + \frac{\mathbf{P}}{3\epsilon_0}
    \]
\end{itemize}

\subsection{El Desplazamiento Eléctrico}
\subsubsection{Ley de Gauss en Dieléctricos}
\[
\nabla \cdot \mathbf{D} = \rho_f \quad \text{y} \quad \oint_S \mathbf{D} \cdot d\mathbf{S} = Q_{f,\text{enc}}
\]
\[
\mathbf{D} = \epsilon_0 \mathbf{E} + \mathbf{P} = \epsilon \mathbf{E} \quad (\text{Lineal})
\]

\subsection{Dieléctricos Lineales}
\subsubsection{Susceptibilidad y Permitividad}
\[
\chi_e = \frac{\mathbf{P}}{\epsilon_0 \mathbf{E}}, \quad \epsilon = \epsilon_0(1 + \chi_e), \quad \epsilon_r = 1 + \chi_e
\]

\subsubsection{Constante Dieléctrica}
\begin{itemize}
    \item Definición: $\kappa = \epsilon_r = \epsilon/\epsilon_0$
    \item Ejemplos:
    \begin{itemize}
        \item Aire: $\kappa \approx 1.0006$
        \item Agua: $\kappa \approx 80$ (a 20°C)
        \item Vidrio: $\kappa \approx 5-10$
    \end{itemize}
\end{itemize}

\subsubsection{Problemas de Valores de Frontera}
\begin{itemize}
    \item Condiciones en interfases:
    \[
    D_{1\perp} = D_{2\perp}, \quad E_{1\parallel} = E_{2\parallel}
    \]
    \item Ejemplo: Dieléctrico entre placas paralelas
\end{itemize}

\subsubsection{Energía en Sistemas Dieléctricos}
\[
U = \frac{1}{2} \int \mathbf{D} \cdot \mathbf{E} \, d\tau = \frac{1}{2} \int \epsilon E^2 \, d\tau
\]

\subsubsection{Fuerzas en Dieléctricos}
\[
\mathbf{F} = -\nabla U \quad \text{o} \quad \mathbf{F} = \frac{\epsilon_0}{2} \left(\chi_e \nabla E^2 + E^2 \nabla \chi_e\right)
\]
\begin{itemize}
    \item Ejemplo: Dieléctrico parcialmente insertado en capacitor
\end{itemize}










\section{Magnetostática}
\subsection{Ley de Biot-Savart}
\[
\mathbf{B} = \frac{\mu_0}{4\pi} \int \frac{I \dif \mathbf{l}' \times \vectorunitario{R}}{R^2}
\]

\subsection{Ecuaciones de Maxwell para magnetostática}
\[
\nabla \cdot \mathbf{B} = 0 \quad \text{y} \quad \nabla \times \mathbf{B} = \mu_0 \mathbf{J}
\]

\subsection{Potencial vectorial}
\[
\mathbf{B} = \nabla \times \mathbf{A} \quad \text{con} \quad \nabla^2 \mathbf{A} = -\mu_0 \mathbf{J}
\]

\section{Campos Magnéticos en la Materia}
\subsection{Magnetización}
\[
\mathbf{M} = \frac{1}{\mu_0} \chi_m \mathbf{B} \quad \text{y} \quad \mathbf{H} = \frac{1}{\mu_0} \mathbf{B} - \mathbf{M}
\]

\subsection{Ecuaciones constitutivas}
\[
\mathbf{B} = \mu \mathbf{H} \quad \text{con} \quad \mu = \mu_0(1 + \chi_m)
\]

\subsection{Condiciones de frontera}
\[
B_{1\perp} - B_{2\perp} = 0 \quad \text{y} \quad H_{1\parallel} - H_{2\parallel} = K_f
\]

\section{Electrodinámica}
\subsection{Ecuaciones de Maxwell completas}
\begin{align*}
    \nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\
    \nabla \cdot \mathbf{B} &= 0 \\
    \nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
    \nabla \times \mathbf{B} &= \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}
\end{align*}

\subsection{Potenciales retardados}
\[
V(\mathbf{r}, t) = \frac{1}{4\pi\epsilon_0} \int \frac{\rho(\mathbf{r}', t_r)}{|\mathbf{r}-\mathbf{r}'|} \dif \tau'
\]
\[
\mathbf{A}(\mathbf{r}, t) = \frac{\mu_0}{4\pi} \int \frac{\mathbf{J}(\mathbf{r}', t_r)}{|\mathbf{r}-\mathbf{r}'|} \dif \tau'
\]

\section{Ondas Electromagnéticas}
\subsection{Ecuación de onda}
\[
\nabla^2 \mathbf{E} = \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2} \quad \text{y} \quad \nabla^2 \mathbf{B} = \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{B}}{\partial t^2}
\]

\subsection{Solución en el vacío}
\[
\mathbf{E}(\mathbf{r}, t) = \mathbf{E}_0 e^{i(\mathbf{k}\cdot\mathbf{r} - \omega t)} \quad \text{con} \quad \frac{\omega}{k} = \frac{1}{\sqrt{\mu_0 \epsilon_0}} = c
\]

\subsection{Vector de Poynting}
\[
\mathbf{S} = \frac{1}{\mu_0} (\mathbf{E} \times \mathbf{B}) \quad \text{(Flujo de energía)}
\]
