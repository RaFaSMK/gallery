import { type VariantProps, tv } from "tailwind-variants";
import Icon from "./icon";
import Text from "./text";
import UploadFileIcon from "../assets/icons/upload-file.svg?react";
import type React from "react";

export const InputSingleFileVariants = tv({
  base: `
    flex flex-col items-center justify-center w-full
    border border-solid border-border-primary
    group-hover:border-border-active
    rounded-lg gap-1 transition
  `,
  variants: {
    size: {
      md: "px-5 py-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const InputSingleFileIconVariants = tv({
  base: "fill-placeholder",
  variants: {
    size: {
      md: "w-8 h-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface InputSingleFileProps
  extends
    VariantProps<typeof InputSingleFileVariants>,
    Omit<React.ComponentProps<"input">, "size"> {}

export default function InputSingleFile({ size }: InputSingleFileProps) {
  return (
    <div>
      <div className="w-full relative group cursor-pointer">
        <input
          type="file"
          className={`
            absolute top-0 right-0 w-full h-full
            opacity-0 cursor-pointer
          `}
        />
        <div className={InputSingleFileVariants({ size })}>
          <Icon
            svg={UploadFileIcon}
            className={InputSingleFileIconVariants({ size })}
          />
          <Text variant="label-medium" className="text-placeholder text-center">
            Arraste o arquivo aqui
            <br />
            ou clique para selecionar
          </Text>
        </div>
      </div>
    </div>
  );
}
