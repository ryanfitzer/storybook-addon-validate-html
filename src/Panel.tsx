import React, {useState, useEffect} from "react";
import { useAddonState, useChannel } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import { ADDON_ID, EVENT_CODE_RECEIVED } from "./constants";
import { ValidationPanel } from "./components/ValidationPanel";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  
  const [html, setHtml] = useAddonState(ADDON_ID, '');
  
  useChannel({
    [EVENT_CODE_RECEIVED]: ({ html }) => {
      setHtml(html);
      // setHtml("<div>lorem ipsum</span>");
    },
  });

  return (
    <AddonPanel {...props}>
      <ValidationPanel html={html} />
    </AddonPanel>
  );
};

