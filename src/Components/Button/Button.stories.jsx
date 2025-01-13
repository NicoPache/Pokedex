import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select", // Selector desplegable
      options: ["primary", "secondary"],
    },
    disabled: { control: "boolean" }, // Toggle para habilitar/deshabilitar
    onClick: { action: "clicked" }, // Acción simulada en Storybook
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "primary",
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  variant: "primary",
  disabled: true,
};
