using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(InstagramCollage.Startup))]
namespace InstagramCollage
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
