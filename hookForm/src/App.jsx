// import desde "react-hook-form" useForm(el mas básico)
// REGISTER = Al registrar un campo, estás diciendo a React Hook Form que ese campo existe y que debe rastrear sus cambios y su estado.(Ya le crea un estado)
// HANDLESUBMIT = La función handleSubmit toma una función como argumento, que generalmente se encarga de procesar los datos del formulario y realizar cualquier lógica necesaria.
import { useForm } from "react-hook-form";

function App() {
  //Nos devuelve multiples objetos.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Nombre</label>
        <input type="text" {...register("nombre", 
        { required: {
          value: true,
          message: "Nombre es requerido"
        },
        minLength: {
          value: 5,
          message: "Mínimo 5 caracteres",
        },
        maxLength: {
          value: 20, 
          message: "Máximo 20 caracteres"
        },
        })} />
        {
          errors.nombre && <span>{errors.nombre.message}</span>
        }

        <label>Corre</label>
        <input type="email" {...register("email", { 
        required: {
          value: true,
          message: "Correo es requerido"
        },
        pattern: {
          value: /[\w\.-]+@[\w\.-]+\.\w{2,4}/,
          message: "Debe ser un correo valido",
        }
        })} 
        />
        {
          errors.nombre && <span>{errors.email.message}</span>
        }

        <label>Password</label>
        <input type="password" {...register("password", { required: true })} />

        <label>Confirm Password</label>
        <input
          type="password"
          {...register("confirmPassword", { required: true })}
        />

        <label>Fecha de Nacimiento</label>
        <input type="date" {...register("nacimiento", { required: true })} />

        <label>País</label>
        <select {...register("país")}>
          <option value="ARG">Argentina</option>
          <option value="MX">México</option>
          <option value="EEUU">Estados Unidos</option>
        </select>

        <label>Foto de Perfil</label>
        <input type="file" {...register("foto")} />

        <div className="condiciones">
          <label>Acepto términos y condiciones</label>
          <input
            type="checkbox"
            {...register("terminos", { required: true })}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
