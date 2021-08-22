import "./styles.css";
import {ContextMenu} from "@/menu";
import {SoundModule} from "@/modules/sound.module";
import {BackgroundModule} from "./modules/background.module";
import {ShapeModule} from "./modules/shape.module";
import {FireworksModule} from "./modules/fireworks.module";
import {RandomImage} from "./modules/randomImage.module";
import {Matrix} from "./modules/matrix.module";
import {TimerModule} from "@/modules/timer.module";
import {MessageModule} from "@/modules/message.module";
import {Piano} from "./modules/piano.module";
import {ClicksModule} from "@/modules/clicks.module";

const menuModules = [
  new SoundModule("sound", "Случайный звук"),
  new BackgroundModule("background", "Изменить фон"),
  new ShapeModule("shape", "Создать фигуру"),
  new FireworksModule("fireworks", "Вкл./Откл. фейерверк"),
  new ClicksModule("clicks", "Подсчет кликов"),
  new RandomImage("image", "Случайное изображение"),
  new Matrix("matrix", "Войти в JS-Матрицу"),
  new TimerModule("timer", "Запустить таймер"),
  new MessageModule("message", "Случайное сообщение"),
  new Piano("piano", "Пианино"),
];

const menu = new ContextMenu("#menu");

menuModules.forEach((module) => menu.add(module));
