// Code generated by 'yaegi extract github.com/mileusna/useragent'. DO NOT EDIT.

package yaegi_interp

import (
	"github.com/mileusna/useragent"
	"go/constant"
	"go/token"
	"reflect"
)

func init() {
	Symbols["github.com/mileusna/useragent/useragent"] = map[string]reflect.Value{
		// function, constant and variable definitions
		"Android":             reflect.ValueOf(constant.MakeFromLiteral("\"Android\"", token.STRING, 0)),
		"Applebot":            reflect.ValueOf(constant.MakeFromLiteral("\"Applebot\"", token.STRING, 0)),
		"Bingbot":             reflect.ValueOf(constant.MakeFromLiteral("\"Bingbot\"", token.STRING, 0)),
		"BlackBerry":          reflect.ValueOf(constant.MakeFromLiteral("\"BlackBerry\"", token.STRING, 0)),
		"Chrome":              reflect.ValueOf(constant.MakeFromLiteral("\"Chrome\"", token.STRING, 0)),
		"ChromeOS":            reflect.ValueOf(constant.MakeFromLiteral("\"ChromeOS\"", token.STRING, 0)),
		"Edge":                reflect.ValueOf(constant.MakeFromLiteral("\"Edge\"", token.STRING, 0)),
		"FacebookApp":         reflect.ValueOf(constant.MakeFromLiteral("\"Facebook App\"", token.STRING, 0)),
		"FacebookExternalHit": reflect.ValueOf(constant.MakeFromLiteral("\"facebookexternalhit\"", token.STRING, 0)),
		"Firefox":             reflect.ValueOf(constant.MakeFromLiteral("\"Firefox\"", token.STRING, 0)),
		"FreeBSD":             reflect.ValueOf(constant.MakeFromLiteral("\"FreeBSD\"", token.STRING, 0)),
		"GoogleAdsBot":        reflect.ValueOf(constant.MakeFromLiteral("\"Google Ads Bot\"", token.STRING, 0)),
		"Googlebot":           reflect.ValueOf(constant.MakeFromLiteral("\"Googlebot\"", token.STRING, 0)),
		"HeadlessChrome":      reflect.ValueOf(constant.MakeFromLiteral("\"Headless Chrome\"", token.STRING, 0)),
		"IOS":                 reflect.ValueOf(constant.MakeFromLiteral("\"iOS\"", token.STRING, 0)),
		"InstagramApp":        reflect.ValueOf(constant.MakeFromLiteral("\"Instagram App\"", token.STRING, 0)),
		"InternetExplorer":    reflect.ValueOf(constant.MakeFromLiteral("\"Internet Explorer\"", token.STRING, 0)),
		"Linux":               reflect.ValueOf(constant.MakeFromLiteral("\"Linux\"", token.STRING, 0)),
		"MacOS":               reflect.ValueOf(constant.MakeFromLiteral("\"macOS\"", token.STRING, 0)),
		"Opera":               reflect.ValueOf(constant.MakeFromLiteral("\"Opera\"", token.STRING, 0)),
		"OperaMini":           reflect.ValueOf(constant.MakeFromLiteral("\"Opera Mini\"", token.STRING, 0)),
		"OperaTouch":          reflect.ValueOf(constant.MakeFromLiteral("\"Opera Touch\"", token.STRING, 0)),
		"Parse":               reflect.ValueOf(useragent.Parse),
		"Safari":              reflect.ValueOf(constant.MakeFromLiteral("\"Safari\"", token.STRING, 0)),
		"TiktokApp":           reflect.ValueOf(constant.MakeFromLiteral("\"TikTok App\"", token.STRING, 0)),
		"Twitterbot":          reflect.ValueOf(constant.MakeFromLiteral("\"Twitterbot\"", token.STRING, 0)),
		"Vivaldi":             reflect.ValueOf(constant.MakeFromLiteral("\"Vivaldi\"", token.STRING, 0)),
		"Windows":             reflect.ValueOf(constant.MakeFromLiteral("\"Windows\"", token.STRING, 0)),
		"WindowsPhone":        reflect.ValueOf(constant.MakeFromLiteral("\"Windows Phone\"", token.STRING, 0)),

		// type definitions
		"UserAgent": reflect.ValueOf((*useragent.UserAgent)(nil)),
		"VersionNo": reflect.ValueOf((*useragent.VersionNo)(nil)),
	}
}