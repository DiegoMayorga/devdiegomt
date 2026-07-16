import Input from "../../components/atoms/input/Input";
import classes from "./Contact.module.scss";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { SOCIAL_IMAGES } from "../../config/social-images";

export default function ContactPage() {
  const [state, handleSubmit] = useForm(`${import.meta.env.VITE_FORM}`);

  if (state.succeeded) {
    return (
      <section className={classes.page}>
        <div className={classes.success}>
          <h1>Thanks for your message!</h1>
          <p>I'll get back to you soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={classes.page}>
      <h1 className={classes.title}>Contact</h1>
      <div className={classes.grid}>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Input type="text" name="contactName" label="Name" required />
          <ValidationError
            prefix="Name"
            field="contactName"
            errors={state.errors}
          />
          <Input type="email" name="contactEmail" label="Email" required />
          <ValidationError
            prefix="Email"
            field="contactEmail"
            errors={state.errors}
          />
          <Input name="message" label="Message" textarea required />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className={classes.actions}>
            <motion.button
              whileHover={{ scale: [1, 1.05, 1], transition: { duration: 0.3 } }}
              type="submit"
              disabled={state.submitting}
            >
              Send message
            </motion.button>
          </div>
        </form>

        <aside className={classes.direct}>
          <h2>Prefer a direct channel?</h2>
          <p className={classes.note}>
            Recruiters and teams usually reach me here — I typically reply
            within a day.
          </p>
          <ul className={classes.channels}>
            {SOCIAL_IMAGES.map((social) => (
              <li key={social.id}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <img src={social.image} alt="" aria-hidden="true" />
                  <span>{social.alt.replace(" icon", "")}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className={classes.location}>
            Bogotá, Colombia (GMT-5) · Open to remote &amp; relocation
          </p>
        </aside>
      </div>
    </section>
  );
}
