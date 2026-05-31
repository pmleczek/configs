class Shape {
  area(): number {
    return 0;
  }
  describe(): string {
    return "shape";
  }
}

export class Circle extends Shape {
  // @ts-expect-error — override keyword required
  area(): number {
    return Math.PI;
  }

  override describe(): string {
    return "circle";
  } // ✓
}
