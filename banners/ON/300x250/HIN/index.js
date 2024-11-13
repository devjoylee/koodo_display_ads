(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];

  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  // symbols:

  (lib.BadgeBG = function () {
    this.initialize(img.BadgeBG);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 277, 277);

  (lib.Swoop3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#7A3DFC')
      .s()
      .p(
        'Egs5AbiQCgmvEomeQEHlvGCl0QFGk4HClfQEsjpIWmAMAsjggDIC1D9MgsjAgCQj+C3ieB5QjeCtitCbQmlF9j6GYQkqHlhjJNQhyKUB/M6IghAXg'
      );
    this.shape.setTransform(0, 0.025);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-287.3, -315.3, 574.7, 630.7);

  (lib.Swoop2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FF0076')
      .s()
      .p(
        'EgzqARnQHMgOHliUQGxiFHbj4QGQjQHdk8QE8jRIWmAMAsjggCIC2D8MgskAgCQoVGAksDpQnDFflFE5QmCF0kHFwQkoGcigGwg'
      );

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-330.6, -258.3, 661.3, 516.7);

  (lib.Swoop1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#A1ED00')
      .s()
      .p(
        'Eg6DAJNIAggXQLnF/KVBnQJOBcIrh+QHShsHxkVQDJhzDqicQCmhvD+i3MAsjggBIC1D9MgsjAgAQoWGBk9DRQncE9mPDPQncD5mwCFQnlCUnMAOg'
      );
    this.shape.setTransform(0.025, 0);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-371.6, -198.1, 743.3, 396.29999999999995);

  (lib.Flash = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#FFFFFF').ss(1, 1, 1).p('AvOr8IedAAIAAX5I+dAAg');

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FFFFFF').s().p('AvOL8IAA33IedAAIAAX3g');

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-98.5, -77.4, 197, 154.9);

  (lib.ChromeBase = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.BadgeBG();
    this.instance.setTransform(-66.35, -66.55, 0.48, 0.48);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-66.3, -66.5, 132.89999999999998, 132.9);

  (lib.Swooshjes = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // timeline functions:
    this.frame_54 = function () {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

    // Layer_6 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p(
      'EgtWAWRQqDpOAAtDQAAtCKDpPQKDpNOOAAQONAAKCJNQKDJPAANCQAANDqDJOQqCJOuNABQuOgBqDpOg'
    );
    var mask_graphics_1 = new cjs.Graphics().p(
      'EgtPAWRQqDpOAAtDQAAtCKDpPQKDpNOOAAQONAAKCJNQKDJPAANCQAANDqDJOQqCJOuNABQuOgBqDpOg'
    );
    var mask_graphics_2 = new cjs.Graphics().p(
      'Egs6AWRQqDpOAAtDQAAtCKDpOQKDpPONAAQOOAAKCJPQKDJOAANCQAANDqDJOQqCJOuOAAQuNAAqDpOg'
    );
    var mask_graphics_3 = new cjs.Graphics().p(
      'EgsYAWRQqDpOAAtDQAAtCKDpPQKDpNOOAAQONAAKCJNQKDJPAANCQAANDqDJOQqCJOuNABQuOgBqDpOg'
    );
    var mask_graphics_4 = new cjs.Graphics().p(
      'EgroAWRQqDpOAAtDQAAtCKDpOQKDpOOOAAQONAAKCJOQKDJOAANCQAANDqDJOQqCJOuNABQuOgBqDpOg'
    );
    var mask_graphics_5 = new cjs.Graphics().p(
      'EgqqAWRQqDpOAAtDQAAtCKDpPQKDpNOOAAQONAAKCJNQKDJPAANCQAANDqDJOQqCJOuNABQuOgBqDpOg'
    );
    var mask_graphics_6 = new cjs.Graphics().p(
      'EgpeAWRQqDpOAAtDQAAtCKDpPQKDpOONABQOOgBKCJOQKDJPAANCQAANDqDJOQqCJOuOAAQuNAAqDpOg'
    );
    var mask_graphics_7 = new cjs.Graphics().p(
      'EgoFAWRQqDpOAAtDQAAtCKDpPQKDpNOOAAQONAAKCJNQKDJPAANCQAANDqDJOQqCJOuNABQuOgBqDpOg'
    );
    var mask_graphics_8 = new cjs.Graphics().p(
      'EgmeAWRQqDpOAAtDQAAtCKDpOQKDpPOOAAQONAAKCJPQKDJOAANCQAANDqDJOQqCJPuNAAQuOAAqDpPg'
    );
    var mask_graphics_9 = new cjs.Graphics().p(
      'EgkpAWRQqDpOAAtDQAAtCKDpOQKDpPOOAAQOMAAKDJPQKDJOAANCQAANDqDJOQqDJPuMAAQuOAAqDpPg'
    );
    var mask_graphics_10 = new cjs.Graphics().p(
      'EgimAWRQqDpOAAtDQAAtCKDpPQKDpNONAAQONAAKDJNQKDJPAANCQAANDqDJOQqDJOuNABQuNgBqDpOg'
    );
    var mask_graphics_11 = new cjs.Graphics().p(
      'EggWAWRQqDpOAAtDQAAtCKDpOQKDpPOOAAQOMAAKDJPQKDJOAANCQAANDqDJOQqDJPuMgBQuOABqDpPg'
    );
    var mask_graphics_12 = new cjs.Graphics().p(
      'A93WRQqDpOAAtDQAAtCKDpOQKDpPONAAQONAAKDJPQKDJOAANCQAANDqDJOQqDJOuNAAQuNAAqDpOg'
    );
    var mask_graphics_13 = new cjs.Graphics().p(
      'A7MWRQqDpOAAtDQAAtCKDpOQKDpPOOAAQOMAAKDJPQKDJOAANCQAANDqDJOQqDJPuMgBQuOABqDpPg'
    );
    var mask_graphics_14 = new cjs.Graphics().p(
      'A4SWRQqDpOAAtDQAAtCKDpOQKDpPOOAAQOMAAKDJPQKDJOAANCQAANDqDJOQqDJPuMAAQuOAAqDpPg'
    );
    var mask_graphics_15 = new cjs.Graphics().p(
      'A4PWRQqEpOAAtDQAAtCKEpPQKCpOONABQONgBKEJOQKCJPAANCQAANDqCJOQqEJOuNAAQuNAAqCpOg'
    );
    var mask_graphics_16 = new cjs.Graphics().p(
      'A4QWRQqCpOAAtDQAAtCKCpPQKEpNOMAAQOOAAKCJNQKEJPAANCQAANDqEJOQqCJOuOABQuMgBqEpOg'
    );

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: mask_graphics_0, x: -354.575, y: 48.45 })
        .wait(1)
        .to({ graphics: mask_graphics_1, x: -353.8873, y: 47.9504 })
        .wait(1)
        .to({ graphics: mask_graphics_2, x: -351.8242, y: 46.4516 })
        .wait(1)
        .to({ graphics: mask_graphics_3, x: -348.3857, y: 43.9535 })
        .wait(1)
        .to({ graphics: mask_graphics_4, x: -343.5719, y: 40.4563 })
        .wait(1)
        .to({ graphics: mask_graphics_5, x: -337.3826, y: 35.9598 })
        .wait(1)
        .to({ graphics: mask_graphics_6, x: -329.818, y: 30.4641 })
        .wait(1)
        .to({ graphics: mask_graphics_7, x: -320.8779, y: 23.9691 })
        .wait(1)
        .to({ graphics: mask_graphics_8, x: -310.5625, y: 16.475 })
        .wait(1)
        .to({ graphics: mask_graphics_9, x: -298.8717, y: 7.9816 })
        .wait(1)
        .to({ graphics: mask_graphics_10, x: -285.8055, y: -1.5109 })
        .wait(1)
        .to({ graphics: mask_graphics_11, x: -271.3639, y: -12.0027 })
        .wait(1)
        .to({ graphics: mask_graphics_12, x: -255.5469, y: -23.4937 })
        .wait(1)
        .to({ graphics: mask_graphics_13, x: -238.3545, y: -35.984 })
        .wait(1)
        .to({ graphics: mask_graphics_14, x: -219.7867, y: -49.4734 })
        .wait(1)
        .to({ graphics: mask_graphics_15, x: -180.1371, y: -63.9621 })
        .wait(1)
        .to({ graphics: mask_graphics_16, x: -137.5, y: -79.45 })
        .wait(39)
    );

    // Swoop1
    this.instance = new lib.Swoop1('synched', 0);
    this.instance.setTransform(-18.15, -142.4);

    var maskedShapeInstanceList = [this.instance];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));

    // Layer_6 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    var mask_1_graphics_2 = new cjs.Graphics().p(
      'Egi9AXcQqDpOAAtDQAAtCKDpPQKDpOOOAAQOMAAKDJOQKDJPAANCQAANDqDJOQqDJOuMAAQuOAAqDpOg'
    );
    var mask_1_graphics_3 = new cjs.Graphics().p(
      'Egi3AXYQqDpOAAtDQAAtCKDpPQKCpOOOAAQONAAKDJOQKDJPAANCQAANDqDJOQqDJOuNAAQuOAAqCpOg'
    );
    var mask_1_graphics_4 = new cjs.Graphics().p(
      'EgioAXMQqDpOAAtDQAAtCKDpPQKDpOOOAAQOMAAKDJOQKDJPAANCQAANDqDJOQqDJOuMAAQuOAAqDpOg'
    );
    var mask_1_graphics_5 = new cjs.Graphics().p(
      'EgiNAW4QqDpOAAtDQAAtCKDpPQKDpOONAAQONAAKDJOQKDJPAANCQAANDqDJOQqDJOuNAAQuNAAqDpOg'
    );
    var mask_1_graphics_6 = new cjs.Graphics().p(
      'EghpAWcQqDpOAAtDQAAtCKDpOQKDpOOOAAQOMAAKDJOQKDJOAANCQAANDqDJOQqDJPuMAAQuOAAqDpPg'
    );
    var mask_1_graphics_7 = new cjs.Graphics().p(
      'Egg5AWRQqDpOAAtDQAAtCKDpOQKDpPONAAQONAAKDJPQKDJOAANCQAANDqDJOQqDJPuNgBQuNABqDpPg'
    );
    var mask_1_graphics_8 = new cjs.Graphics().p(
      'EggAAWRQqDpOAAtDQAAtCKDpPQKDpNOOAAQOMAAKDJNQKDJPAANCQAANDqDJOQqDJOuMABQuOgBqDpOg'
    );
    var mask_1_graphics_9 = new cjs.Graphics().p(
      'A+7WRQqDpOAAtDQAAtCKDpOQKDpPONAAQONAAKDJPQKDJOAANCQAANDqDJOQqDJPuNgBQuNABqDpPg'
    );
    var mask_1_graphics_10 = new cjs.Graphics().p(
      'A9sWRQqDpOAAtDQAAtCKDpOQKDpPONAAQONAAKDJPQKDJOAANCQAANDqDJOQqDJPuNgBQuNABqDpPg'
    );
    var mask_1_graphics_11 = new cjs.Graphics().p(
      'A8TWRQqDpOAAtDQAAtCKDpPQKDpNONAAQONAAKDJNQKDJPAANCQAANDqDJOQqDJOuNABQuNgBqDpOg'
    );
    var mask_1_graphics_12 = new cjs.Graphics().p(
      'A6vWRQqDpOAAtDQAAtCKDpOQKDpPONAAQONAAKDJPQKDJOAANCQAANDqDJOQqDJPuNgBQuNABqDpPg'
    );
    var mask_1_graphics_13 = new cjs.Graphics().p(
      'A5BWRQqDpOAAtDQAAtCKDpOQKDpOOOAAQOMAAKDJOQKDJOAANCQAANDqDJOQqDJOuMABQuOgBqDpOg'
    );
    var mask_1_graphics_14 = new cjs.Graphics().p(
      'A4QWRQqCpOAAtDQAAtCKCpOQKEpPOMAAQOOAAKCJPQKEJOAANCQAANDqEJOQqCJPuOgBQuMABqEpPg'
    );
    var mask_1_graphics_15 = new cjs.Graphics().p(
      'A4QWRQqCpOgBtDQABtCKCpOQKDpPONAAQOOAAKCJPQKEJOAANCQAANDqEJOQqCJPuOgBQuNABqDpPg'
    );
    var mask_1_graphics_16 = new cjs.Graphics().p(
      'A4PWRQqEpOAAtDQAAtCKEpOQKCpOONAAQONAAKEJOQKCJOAANCQAANDqCJOQqEJOuNABQuNgBqCpOg'
    );
    var mask_1_graphics_17 = new cjs.Graphics().p(
      'A4PWRQqEpOAAtDQAAtCKEpOQKCpPONAAQONAAKEJPQKCJOAANCQAANDqCJOQqEJPuNgBQuNABqCpPg'
    );
    var mask_1_graphics_18 = new cjs.Graphics().p(
      'A4PWRQqEpOAAtDQAAtCKEpOQKCpPONAAQONAAKEJPQKCJOAANCQAANDqCJOQqEJPuNAAQuNAAqCpPg'
    );

    this.timeline.addTween(
      cjs.Tween.get(mask_1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(2)
        .to({ graphics: mask_1_graphics_2, x: -288.075, y: 209.025 })
        .wait(1)
        .to({ graphics: mask_1_graphics_3, x: -287.5494, y: 208.6267 })
        .wait(1)
        .to({ graphics: mask_1_graphics_4, x: -285.9727, y: 207.4316 })
        .wait(1)
        .to({ graphics: mask_1_graphics_5, x: -283.3447, y: 205.4399 })
        .wait(1)
        .to({ graphics: mask_1_graphics_6, x: -279.6656, y: 202.6516 })
        .wait(1)
        .to({ graphics: mask_1_graphics_7, x: -274.9354, y: 196.583 })
        .wait(1)
        .to({ graphics: mask_1_graphics_8, x: -269.1539, y: 187.8195 })
        .wait(1)
        .to({ graphics: mask_1_graphics_9, x: -262.3213, y: 177.4627 })
        .wait(1)
        .to({ graphics: mask_1_graphics_10, x: -254.4375, y: 165.5125 })
        .wait(1)
        .to({ graphics: mask_1_graphics_11, x: -245.5025, y: 151.969 })
        .wait(1)
        .to({ graphics: mask_1_graphics_12, x: -235.5164, y: 136.832 })
        .wait(1)
        .to({ graphics: mask_1_graphics_13, x: -224.4791, y: 120.1018 })
        .wait(1)
        .to({ graphics: mask_1_graphics_14, x: -205.2312, y: 101.7781 })
        .wait(1)
        .to({ graphics: mask_1_graphics_15, x: -178.9519, y: 81.8611 })
        .wait(1)
        .to({ graphics: mask_1_graphics_16, x: -150.5703, y: 60.3508 })
        .wait(1)
        .to({ graphics: mask_1_graphics_17, x: -120.0863, y: 37.2471 })
        .wait(1)
        .to({ graphics: mask_1_graphics_18, x: -87.5, y: 12.55 })
        .wait(37)
    );

    // Swoop2
    this.instance_1 = new lib.Swoop2('synched', 0);
    this.instance_1.setTransform(41, -56.95);
    this.instance_1._off = true;

    var maskedShapeInstanceList = [this.instance_1];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({ _off: false }, 0).wait(53));

    // Layer_8 (mask)
    var mask_2 = new cjs.Shape();
    mask_2._off = true;
    var mask_2_graphics_4 = new cjs.Graphics().p(
      'EgabAgqQqDpOAAtDQAAtCKDpPQKDpNONAAQONAAKDJNQKDJPAANCQAANDqDJOQqDJOuNABQuNgBqDpOg'
    );
    var mask_2_graphics_5 = new cjs.Graphics().p(
      'EgaXAglQqDpOAAtDQAAtCKDpPQKDpOOOAAQOMAAKDJOQKDJPAANCQAANDqDJOQqDJOuMAAQuOAAqDpOg'
    );
    var mask_2_graphics_6 = new cjs.Graphics().p(
      'EgaKAgWQqDpOAAtDQAAtCKDpPQKDpOONAAQONAAKDJOQKDJPAANCQAANDqDJOQqDJOuNAAQuNAAqDpOg'
    );
    var mask_2_graphics_7 = new cjs.Graphics().p(
      'A51f8QqDpOAAtDQAAtCKDpOQKDpOOOAAQOMAAKDJOQKDJOAANCQAANDqDJOQqDJPuMAAQuOAAqDpPg'
    );
    var mask_2_graphics_8 = new cjs.Graphics().p(
      'A5WfZQqDpOAAtDQAAtCKDpPQKDpOONAAQONAAKDJOQKDJPAANCQAANDqDJOQqDJOuNAAQuNAAqDpOg'
    );
    var mask_2_graphics_9 = new cjs.Graphics().p(
      'A4werQqDpOAAtDQAAtCKDpOQKDpOOOAAQOMAAKDJOQKDJOAANCQAANDqDJOQqDJPuMAAQuOAAqDpPg'
    );
    var mask_2_graphics_10 = new cjs.Graphics().p(
      'A4PdzQqEpOAAtDQAAtCKEpOQKCpOONAAQONAAKEJOQKCJOAANCQAANDqCJOQqEJPuNAAQuNAAqCpPg'
    );
    var mask_2_graphics_11 = new cjs.Graphics().p(
      'A4PcxQqEpOAAtDQAAtCKEpOQKCpOONAAQONAAKEJOQKCJOAANCQAANDqCJOQqEJPuNAAQuNAAqCpPg'
    );
    var mask_2_graphics_12 = new cjs.Graphics().p(
      'A4QblQqDpOABtDQgBtCKDpOQKEpOOMAAQONAAKEJOQKDJOgBNCQABNDqDJOQqEJPuNAAQuMAAqEpPg'
    );
    var mask_2_graphics_13 = new cjs.Graphics().p(
      'A4QaPQqCpOAAtDQAAtCKCpPQKEpOOMAAQOOAAKCJOQKEJPAANCQAANDqEJOQqCJOuOAAQuMAAqEpOg'
    );
    var mask_2_graphics_14 = new cjs.Graphics().p(
      'A4PYuQqEpOAAtDQAAtCKEpOQKCpOONAAQONAAKEJOQKCJOAANCQAANDqCJOQqEJPuNAAQuNAAqCpPg'
    );
    var mask_2_graphics_15 = new cjs.Graphics().p(
      'A4QXEQqCpOgBtDQABtCKCpPQKEpOOMAAQOOAAKCJOQKEJPAANCQAANDqEJOQqCJOuOAAQuMAAqEpOg'
    );
    var mask_2_graphics_16 = new cjs.Graphics().p(
      'A4QWRQqCpOAAtDQAAtCKCpOQKEpPOMAAQOOAAKCJPQKEJOAANCQAANDqEJOQqCJPuOAAQuMAAqEpPg'
    );
    var mask_2_graphics_17 = new cjs.Graphics().p(
      'A4QWRQqCpOAAtDQAAtCKCpPQKEpNOMAAQOOAAKCJNQKEJPAANCQAANDqEJOQqCJPuOAAQuMAAqEpPg'
    );
    var mask_2_graphics_18 = new cjs.Graphics().p(
      'A4QWRQqCpOAAtDQAAtCKCpPQKEpNOMAAQOOAAKCJNQKEJPAANCQAANDqEJOQqCJOuOABQuMgBqEpOg'
    );
    var mask_2_graphics_19 = new cjs.Graphics().p(
      'A4PWRQqEpOAAtDQAAtCKEpOQKCpPONAAQONAAKEJPQKCJOAANCQAANDqCJOQqEJPuNgBQuNABqCpPg'
    );
    var mask_2_graphics_20 = new cjs.Graphics().p(
      'A4PWRQqEpOABtDQgBtCKEpPQKDpOOMAAQONAAKEJOQKDJPgBNCQABNDqDJOQqEJOuNAAQuMAAqDpOg'
    );

    this.timeline.addTween(
      cjs.Tween.get(mask_2)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(4)
        .to({ graphics: mask_2_graphics_4, x: -233.525, y: 268.05 })
        .wait(1)
        .to({ graphics: mask_2_graphics_5, x: -233.0952, y: 267.5423 })
        .wait(1)
        .to({ graphics: mask_2_graphics_6, x: -231.8059, y: 266.0191 })
        .wait(1)
        .to({ graphics: mask_2_graphics_7, x: -229.6569, y: 263.4806 })
        .wait(1)
        .to({ graphics: mask_2_graphics_8, x: -226.6484, y: 259.9266 })
        .wait(1)
        .to({ graphics: mask_2_graphics_9, x: -222.7804, y: 255.3571 })
        .wait(1)
        .to({ graphics: mask_2_graphics_10, x: -216.5555, y: 249.7723 })
        .wait(1)
        .to({ graphics: mask_2_graphics_11, x: -205.381, y: 243.172 })
        .wait(1)
        .to({ graphics: mask_2_graphics_12, x: -192.4875, y: 235.5563 })
        .wait(1)
        .to({ graphics: mask_2_graphics_13, x: -177.8748, y: 226.9251 })
        .wait(1)
        .to({ graphics: mask_2_graphics_14, x: -161.543, y: 217.2785 })
        .wait(1)
        .to({ graphics: mask_2_graphics_15, x: -143.492, y: 206.6165 })
        .wait(1)
        .to({ graphics: mask_2_graphics_16, x: -123.7219, y: 188.3281 })
        .wait(1)
        .to({ graphics: mask_2_graphics_17, x: -102.2326, y: 162.9424 })
        .wait(1)
        .to({ graphics: mask_2_graphics_18, x: -79.0242, y: 135.5258 })
        .wait(1)
        .to({ graphics: mask_2_graphics_19, x: -54.0967, y: 106.0783 })
        .wait(1)
        .to({ graphics: mask_2_graphics_20, x: -27.45, y: 74.6 })
        .wait(35)
    );

    // Swoop3
    this.instance_2 = new lib.Swoop3('synched', 0);
    this.instance_2.setTransform(102.4, 25.2);
    this.instance_2._off = true;

    var maskedShapeInstanceList = [this.instance_2];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({ _off: false }, 0).wait(51));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-389.7, -281, 581.8, 621.6);

  (lib.Badge = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // timeline functions:
    this.frame_75 = function () {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(75).call(this.frame_75).wait(1));

    // <Clip Group>_0
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f('#000000')
      .s()
      .p(
        'AhFJLQgVgNgpgkQgtgogZgKQgagLg/gEQg1gEgXgGQgogJgYgYQgXgXgKgoQgFgYgEgzIgEgwQgEgZgHgRQgJgXgqgwQgigngOgWQgWgjAAgjQAAgiAWgjQANgWAjgoQApguAKgYQAHgRAEgYIAEgxQAEgzAFgYQAKgoAXgXQAYgYAogKQAYgFA0gEQA/gEAagLQAQgGATgPIAjgdQApgkAVgNQAkgWAhAAQAiAAAkAWQAVANApAkIAjAdQATAPAQAGQAbALA+AEQA0AEAYAFQAoAKAYAYQAXAXAKAoQAFAYAEAzIAEAxQAEAZAGAQQALAYApAuQAjAoANAWQAWAjAAAiQAAAjgWAjQgOAWgiAnQgqAwgKAXQgGARgEAZIgEAwQgEAzgFAYQgKAogXAXQgXAYgpAJQgXAGg1AEQg+AEgbALQgYAKguAoQgpAkgVANQgkAWgiAAQghAAgkgWgAhkoaQhHA9gWAJQgYAKheAHQhMAHgdAcQgcAdgGBMQgIBdgKAZQgKAWg8BHQgyA6AAAqQAAAqAyA7QA8BHAKAWQAKAZAIBcQAGBNAcAdQAdAcBMAHQBeAHAYAKQAWAKBHA8QA7AyApAAQAqAAA7gyQBHg9AWgJQAYgKBegHQBMgHAdgcQAcgdAGhNQAIhcAKgZQAKgWA8hHQAyg7AAgqQAAgqgyg6Qg8hGgKgXQgKgZgIhdQgGhMgcgdQgdgchMgHQhegHgYgKQgWgJhHg9Qg7gygqAAQgpAAg7Ayg'
      );
    this.shape_11.setTransform(0.175, 0.55);

    this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(76));

    // Layer_7 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p(
      'AhwJeQhQhFgZgKQgbgLhpgJQhWgHggggQgggggHhWQgJhpgLgbQgKgZhEhQQg5hCAAgvQAAgvA5hBQBEhQAKgZQALgcAJhoQAHhWAgggQAgggBWgHQBogJAcgLQAZgLBQhEQBCg4AuAAQAwAABBA4QBQBEAZALQAcALBoAJQBWAHAgAgQAgAgAHBWQAJBoALAcQALAZBEBQQA4BBAAAvQAAAvg4BCQhEBQgLAZQgLAcgJBoQgHBWggAgQggAghWAHQhoAJgcALQgZAKhQBFQhBA4gwAAQguAAhCg4g'
    );
    mask.setTransform(0.025, 0.025);

    // Layer_2
    this.instance = new lib.Flash('synched', 0);
    this.instance.setTransform(6.15, -0.85);
    this.instance.alpha = 0;
    this.instance._off = true;

    var maskedShapeInstanceList = [this.instance];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(29)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 5)
        .to({ alpha: 0 }, 5)
        .to({ _off: true }, 1)
        .wait(36)
    );

    // <Clip Group>_1
    this.instance_1 = new lib.ChromeBase('synched', 0);
    this.instance_1.setTransform(0.1, -0.1, 1, 1, 0, 0, 0, 0.1, -0.1);

    var maskedShapeInstanceList = [this.instance_1];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(26)
        .to({ startPosition: 0 }, 0)
        .to({ rotation: 74.2054, x: 0.15 }, 15, cjs.Ease.quadInOut)
        .wait(35)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-66.1, -66.1, 132.3, 132.3);

  // stage content:
  (lib.BLACK_FRIDAY_V3_GENERIC_BUNDLE__300x250 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    this.actionFrames = [0, 1, 244];
    // timeline functions:
    this.frame_0 = function () {};
    this.frame_1 = function () {};
    this.frame_244 = function () {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(1)
        .call(this.frame_1)
        .wait(243)
        .call(this.frame_244)
        .wait(1)
    );

    // // Badge
    // this.instance_11 = new lib.Badge('synched', 0, false);
    // this.instance_11.setTransform(378.3, 155, 0.5692, 0.5692, 0, 0, 0, 0.1, 0);
    // this.instance_11._off = true;

    // this.timeline.addTween(
    //   cjs.Tween.get(this.instance_11)
    //     .wait(167)
    //     .to({ _off: false }, 0)
    //     .to({ x: 217.3, y: 158.3, startPosition: 10 }, 10, cjs.Ease.quadOut)
    //     .wait(68)
    // );

    // Swooshes
    this.instance_12 = new lib.Swooshjes('synched', 0, false);
    this.instance_12.setTransform(269.6, 227.45);

    this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(245));

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(-195.5, 71.5, 894.5, 496.6);

  // library properties:
  lib.properties = {
    id: '0A699BA23F964BD280A6D5329E5C089A',
    width: 300,
    height: 250,
    fps: 24,
    color: '#FFFFFF',
    opacity: 1.0,
    manifest: [{ src: 'assets/badge_bg.png?1729699457977', id: 'BadgeBG' }],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions['0A699BA23F964BD280A6D5329E5C089A'] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + 'px';
        container.style.height = h * sRatio + 'px';
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target;
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index];
            if (
              cacheInst.startFrame <= target.currentFrame &&
              target.currentFrame <= cacheInst.endFrame
            ) {
              cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
            }
          }
        }
      }
    }
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
