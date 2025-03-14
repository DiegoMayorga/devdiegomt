import Input from "../components/atoms/Input";
import classes from "../styles/atoms/Input.module.scss";

export default function ContactPage() {
  return (
    <section className={classes.contact}>
      <h1>Contact</h1>
      <form className={classes.form}>
        <Input type="text" name="contactName" label="Name" />
        <Input type="email" name="contactEmail" label="Email" />
        <Input type="textarea" name="message" label="Message" textarea={true} />
        <p className={classes["form-actions"]}>
          <button type="submit">Submit</button>
        </p>
      </form>
    </section>
  );
}
