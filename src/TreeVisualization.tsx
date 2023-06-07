import React from "react";
import { AiOutlineRight } from 'react-icons/ai';
import { TreeData } from "./assets/TreeData";
import SidebarItem from "./SidebarItem";
import './TreeVisualization.css';

const TreeVisualization = () => {
  return (
    <div className="sidebar">
      { TreeData.map((item, index) => <SidebarItem key={index} item={item} />) }
    </div>
  )
};

export default TreeVisualization;