import Input from "../components/atoms/Input";
import classes from "../styles/pages/Contact.module.scss";

export default function ContactPage() {
  return (
    <section className={classes.contact}>
      <h1>Contact</h1>
      <p className={classes.disabled}>Disabled. Send me an email.</p>
      <form className={classes.form}>
        <Input type="text" name="contactName" label="Name" />
        <Input type="email" name="contactEmail" label="Email" />
        <Input type="textarea" name="message" label="Message" textarea={true} />
        <p className={classes["form-actions"]}>
          <button type="submit" disabled>
            Submit
          </button>
        </p>
      </form>
    </section>
  );
}
