import Outcall "mo:caffeineai-http-outcalls/outcall";
import Text "mo:core/Text";
import Error "mo:core/Error";

actor {

  // Escapes a Text value for safe embedding inside a JSON string literal.
  func jsonEscape(s : Text) : Text {
    // We use Text.fromChar with unicode escapes to avoid char-literal escape issues.
    let backslash = Text.fromChar('\u{5C}'); // U+005C = \
    let quote     = Text.fromChar('\u{22}'); // U+0022 = "
    let newline   = Text.fromChar('\u{0A}'); // U+000A = newline
    let cr        = Text.fromChar('\u{0D}'); // U+000D = carriage return
    let tab       = Text.fromChar('\u{09}'); // U+0009 = tab
    var r = s;
    r := r.replace(#text backslash, backslash # backslash);
    r := r.replace(#text quote,     backslash # quote);
    r := r.replace(#text newline,   backslash # "n");
    r := r.replace(#text cr,        backslash # "r");
    r := r.replace(#text tab,       backslash # "t");
    r
  };

  public query func transform(input : Outcall.TransformationInput) : async Outcall.TransformationOutput {
    Outcall.transform(input);
  };

  public func submitContactForm(
    name : Text,
    email : Text,
    projectType : Text,
    budget : Text,
    message : Text
  ) : async { #ok : Text; #err : Text } {
    let jsonBody =
      "{" #
      "\"fullName\":\""    # jsonEscape(name)        # "\"," #
      "\"email\":\""       # jsonEscape(email)       # "\"," #
      "\"projectType\":\"" # jsonEscape(projectType) # "\"," #
      "\"budgetRange\":\"" # jsonEscape(budget)      # "\"," #
      "\"message\":\""     # jsonEscape(message)     # "\"," #
      "\"to\":\"armanorig7@gmail.com\"" #
      "}";

    try {
      let _ = await Outcall.httpPostRequest(
        "https://hooks.zapier.com/hooks/catch/27554189/4yizw6g/",
        [{ name = "Content-Type"; value = "application/json" }],
        jsonBody,
        transform
      );
      // httpPostRequest throws on non-2xx; reaching here means success.
      #ok("Message sent successfully.");
    } catch (e) {
      #err("Webhook error: " # e.message());
    };
  };
};
