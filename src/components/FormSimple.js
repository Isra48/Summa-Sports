import React from 'react'

import './Form.css'

export default ({
  name = 'Simple Form',
  subject = '', // optional subject of the notification email
  action = ''
}) => (
  <form
    className="Form"
    name={name}
    action={action}
    data-netlify=""
    data-netlify-honeypot="_gotcha"
  >
    <label className="Form--Label">
      Nombre
      <input
        className="Form--Input"
        type="text"
        placeholder="Nombre"
        name="name"
        required
      />
    </label>
    <label className="Form--Label">
      Correo
      <input
        className="Form--Input"
        type="email"
        placeholder="Correo"
        name="email"
        required
      />
    </label>
    <label className="Form--Label has-arrow">
      <select
        className="Form--Input Form--Select"
        name="type"
        defaultValue="Type of Enquiry"
        required
      >
        <option disabled hidden>
          Asunto
        </option>
        <option>Campaña</option>
        <option>Social media</option>
        <option>E-commerce</option>
        <option>Desarrollo web</option>
        <option>Creación a medida</option>
      </select>
    </label>
    <label className="Form--Label">
      Mensaje
      <textarea
        className="Form--Input Form--Textarea"
        placeholder="Message"
        name="message"
        rows="10"
        required
      />
    </label>
    <input type="text" name="_gotcha" style={{ display: 'none' }} />
    {!!subject && <input type="hidden" name="subject" value={subject} />}
    <input type="hidden" name="form-name" value={name} />
    <input className="Button Form--SubmitButton" type="submit" value="Enviar" />
  </form>
)
