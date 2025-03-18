import Input from "../../components/atoms/input/Input";
import classes from "./Contact.module.scss";

export default function ContactPage() {
  return (
    <section className={classes.contact}>
      <h1>Contact</h1>
      <p className={classes.disabled}>Disabled. Send me an email.</p>
      <form className={classes.form}>
        <Input type="text" name="contactName" label="Name" disabled />
        <Input type="email" name="contactEmail" label="Email" disabled />
        <Input name="message" label="Message" textarea disabled />
        <div className={classes["form-actions"]}>
          <button type="submit" disabled>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
