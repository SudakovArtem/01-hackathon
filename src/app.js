import "./styles.css";
import { ContextMenu } from "@/menu";
import { SoundModule } from "@/modules/sound.module";
import { BackgroundModule } from "./modules/background.module";
import { ShapeModule } from "./modules/shape.module";
import { FireworksModule } from "./modules/fireworks.module";
import { CountingClicks } from "./modules/countingСlicks.module";
import { RandomImage } from "./modules/randomImage.module";

const menuModules = [
  new SoundModule("sound", "Случайный звук"),
  new BackgroundModule("background", "Изменить фон"),
  new ShapeModule("shape", "Создать фигуру"),
  new FireworksModule("fireworks", "Вкл./Откл. феерверк"),
  new CountingClicks("clicks", "Подсчет кликов"),
  new RandomImage("image", "Случайное изображение"),
];

const menu = new ContextMenu("#menu");

menuModules.forEach((module) => menu.add(module));
