import '../../Styles/login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <div className='login_container'>
        <h2>Iniciar Sesión</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre de usuario"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type='password' placeholder='Ingresa tu contraseña'></Form.Control>
            <Form.Text className="text-muted">Tu contraseña es secreta</Form.Text>
          </Form.Group> 
          <Button variant='primary' type='submit'>Enviar</Button>
          <Button variant='secondary' type='submit' className='mx-3'><Link to='/register'>Registro</Link></Button>
        </Form>
      </div>
    </>
  )
}
