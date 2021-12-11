import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDesignComponents, showOutline } from "../../store/design";
import DButton from "../DesignComponents/DButton/DButton";

const DesignView = () => {
  const dispatch = useDispatch();
  const designComponents = useSelector(getDesignComponents);

  const getTagFromComponent = (component, key) => {
    const tagId = `${component.type}-${key}`;
    switch (component.type) {
      case "span":
        return (
          <span onClick={() => dispatch(showOutline(tagId))} key={tagId}>
            {component.content}
          </span>
        );

      case "button":
        return (
          <DButton component={component} key={tagId} tagId={tagId}>
            {component.content}
          </DButton>
        );
      case "h2":
        return <h2 key={tagId}>{component.content}</h2>;

      default:
        return <div key={tagId}>{component.content}</div>;
    }
  };

  return (
    <div>
      <div>
        {designComponents?.map((component, index) =>
          getTagFromComponent(component, index)
        )}
      </div>
    </div>
  );
};

export default DesignView;
