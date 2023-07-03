const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");

admin.initializeApp();

const SENDGRID_API_KEY = "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"; // Reemplaza con tu API Key de SendGrid

exports.sendWelcomeEmail = functions.https.onCall(async (data, context) => {
  const { nombre, apellidos, correo } = data;

  // Guarda los datos en Firestore
  const db = admin.firestore();
  const usuariosRef = db.collection("usuarios");
  const newUserRef = usuariosRef.doc();
  
  try {
    await newUserRef.set({ nombre, apellidos, correo });
    console.log("Datos guardados en Firestore correctamente");
  } catch (error) {
    console.error("Error al guardar los datos en Firestore", error);
    return { success: false };
  }

  // Envía el correo de bienvenida utilizando SendGrid
  sgMail.setApiKey(SENDGRID_API_KEY);
  const msg = {
    to: correo,
    from: "visualitv.es@gmail.com", // Reemplaza con tu dirección de correo electrónico
    subject: "Bienvenido a VISUALI",
    html: `<p>Hola ${nombre} ${apellidos},</p><p>Bienvenido a VISUALI. Gracias por unirte a nosotros.</p>`,
  };

  try {
    await sgMail.send(msg);
    console.log("Correo de bienvenida enviado");
    return { success: true };
  } catch (error) {
    console.error("Error al enviar el correo de bienvenida", error);
    return { success: false };
  }
});