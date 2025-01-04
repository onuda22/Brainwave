import ButtonSvg from "../assets/svg/ButtonSvg";

/**
 * Create a reusable Button component
 * Where it can be a simple button or a link
 * To achive that, this component must be have two sub function
 * First sub function will render a Button
 * Second sub function will render a Link
 * @returns Button or Link
 */
const Button = ({ className, href, onClick, children, px, white }) => {
  /**
   *
   */
  const classes = `button relative inline-flex items-center justify-center h-11 transation-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  //it will change and modified text init
  const spanClasses = "relative z-10";

  /**
   * Making sub function to render Button
   * @returns Button
   */
  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  /**
   * Making sub function to render Link
   * @returns Link
   */
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  /**
   * Give a logic if the component throw a href variable it will return Link
   * Otherwise it will return Button
   */
  return href ? renderLink() : renderButton();
};

export default Button;
