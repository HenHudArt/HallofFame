const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Button,
		C3.Behaviors.Persist,
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.NextPrevLayout,
		C3.Plugins.System.Cnds.CompareVar
	];
};
self.C3_JsPropNameTable = [
	{Persist: 0},
	{start: 0},
	{you: 0},
	{Text: 0},
	{correct: 0},
	{desk: 0},
	{paper: 0},
	{IncorrectOne: 0},
	{Text2: 0},
	{Text3: 0},
	{Questions: 0},
	{Incorrect: 0}
];

self.InstanceType = {
	start: class extends self.IButtonInstance {},
	you: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	correct: class extends self.IButtonInstance {},
	desk: class extends self.ISpriteInstance {},
	paper: class extends self.ISpriteInstance {},
	IncorrectOne: class extends self.IButtonInstance {},
	Text2: class extends self.ITextInstance {},
	Text3: class extends self.ITextInstance {}
}