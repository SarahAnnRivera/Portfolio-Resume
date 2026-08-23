import "./ContactModal.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


function ContactModal({ isOpen, onClose }) {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

    const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal__backdrop" onClick={onClose}>
      <div
        className="modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose}>
          ×
        </button>

        <div className="modal__intro">
          <p className="section__eyebrow">LET'S CONNECT</p>
          <h2>Have a project, role, or idea in mind?</h2>
          <p>
            I’d love to hear about it. Send me a note and I’ll get back to you
            as soon as I can.
          </p>
        </div>

        <form
          ref={formRef}
          className="modal__form"
          onSubmit={handleSubmit}
            >
          <label>
            Name
            <input type="text" name="name" required/>
          </label>

          <label>
            Email
            <input type="email" name="email" required/>
          </label>

          <label>
            Message
            <textarea name="message" rows="5" required/>
          </label>

          <button type="submit" disabled={status === "loading"}>
  {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
                <p className="modal__status modal__status--success">
                     Message sent. I’ll be in touch soon.
                </p>
                    )}

{status === "error" && (
             <p className="modal__status modal__status--error">
                 Something went wrong. Please try again.
                </p>
                    )}
        </form>
      </div>
    </div>
  );
}

export default ContactModal;