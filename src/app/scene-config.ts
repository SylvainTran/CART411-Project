export class SCamera {
  private fov: number;
  private aspect: number;
  private near: number;
  private far: number;
  private position: number[];
}

export class SRenderer {
  private width: number;
  private height: number;
}

export class SceneConfig {
  public cameras: SCamera[];
  public renderers: SRenderer[];
}
