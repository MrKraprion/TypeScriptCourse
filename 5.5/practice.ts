class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

class HanoiTower<T = number> {
  private source: Stack<T>;
  private target: Stack<T>;
  private aux: Stack<T>;

  private sourceName: string;
  private targetName: string;
  private auxName: string;

  constructor(
    sourceName: string = 'First',
    targetName: string = 'Second',
    auxName: string = 'Third'
  ) {
    this.source = new Stack<T>();
    this.target = new Stack<T>();
    this.aux = new Stack<T>();
    this.sourceName = sourceName;
    this.targetName = targetName;
    this.auxName = auxName;
  }

  addDisks(disks: T[]): void {
    for (const disk of disks) {
      this.source.push(disk);
    }
  }

  solve(): void {
    this.moveDisks(this.source.size(), this.source, this.target, this.aux);
  }

  private moveDisks(n: number, src: Stack<T>, dest: Stack<T>, aux: Stack<T>): void {
    if (n === 0) {
      return;
    }
    this.moveDisks(n - 1, src, aux, dest);
    const disk = src.pop()!;
    dest.push(disk);
    this.printMove(disk, this.getName(src), this.getName(dest));
    this.moveDisks(n - 1, aux, dest, src);
  }

  private getName(stack: Stack<T>): string {
    if (stack === this.source) return this.sourceName;
    if (stack === this.target) return this.targetName;
    return this.auxName;
  }

  private printMove(disk: T, from: string, to: string): void {
    console.log(`Переместить диск ${disk} с ${from} на ${to}`);
  }
}