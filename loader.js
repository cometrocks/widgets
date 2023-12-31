const initialization = () => {
  const baseUrl = "https://raw.githack.com/cometrocks/widgets/main";
  const script = document.createElement("script");

  const scriptSrc = window.__CR_PROD__
    ? `${baseUrl}/widget-prod.js`
    : `${baseUrl}/widget.js`;

  script.setAttribute("src", scriptSrc);
  script.setAttribute("type", "module");
  script.setAttribute("defer", "true");

  const css = document.createElement("link");
  css.setAttribute("href", `${baseUrl}/widget.css`);
  css.setAttribute("rel", "stylesheet");
  css.setAttribute("type", "text/css");
  css.setAttribute("defer", "true");

  document.head.append(css, script);
};
initialization();

