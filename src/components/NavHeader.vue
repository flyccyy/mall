<template>
	<div class="header">
		<div class="nav-topbar">
			<div class="container">
				<div class="topbar-menu">
					<a href="javascript:;">小米商城</a>
					<a href="javascript:;">MUI</a>
					<a href="javascript:;">云服务</a>
					<a href="javascript:;">协议规则</a>
				</div>
				<div class="topbar-user">
					<a href="javascript:;">登录</a>
					<a href="javascript:;">我的订单</a>
					<a href="javascript:;" class="my-cart">
						<span class="icon-cart"></span>购物车
					</a>
				</div>
			</div>
		</div>
		<div class="nav-header">
			<div class="container">
				<div class="header-logo">
					<a href="/#/index"></a>
				</div>
				<div class="header-menu">
					<div class="item-menu">
						<span>小米手机</span>
						<div class="children">
              <ul>
                <li class="product">
                  <a href="/#/product/31" target="_blank">
                    <div class="pro-img"><img src="/imgs/nav-img/nav-1.png" alt=""></div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="/#/product/31" target="_blank">
                    <div class="pro-img"><img src="/imgs/nav-img/nav-1.png" alt=""></div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="/#/product/31" target="_blank">
                    <div class="pro-img"><img src="/imgs/nav-img/nav-1.png" alt=""></div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="/#/product/31" target="_blank">
                    <div class="pro-img"><img src="/imgs/nav-img/nav-1.png" alt=""></div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="/#/product/31" target="_blank">
                    <div class="pro-img"><img src="/imgs/nav-img/nav-1.png" alt=""></div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="/#/product/31" target="_blank">
                    <div class="pro-img"><img src="/imgs/nav-img/nav-1.png" alt=""></div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </ul>
            </div>
					</div>
					<div class="item-menu">
						<span>RedMi红米</span>
						<!-- <div class="children">
              
            </div> -->
					</div>
					<div class="item-menu">
						<span>电视</span>
						<div class="children">
               <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">2699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt="">
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
					</div>
				</div>
				<div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "nav-header"
};
</script>

<style lang="less">
@import "@/assets/less/base.less";
@import "@/assets/less/mixin.less";
.header {
	.nav-topbar {
		height: 39px;
		line-height: 39px;
		background-color: #333;
		color: #b0b0b0;
		.container {
			.flex;
			a {
				display: inline-block;
				color: #b0b0b0;
				margin-right: 17px;
			}
			.my-cart {
				width: 110px;
				text-align: center;
				background-color: #ff6600;
        color: #fff;
        margin-right:0;
				.icon-cart {
					display: inline-block;
					width: 16px;
					height: 12px;
					background: url("/imgs/icon-cart-checked.png") no-repeat center;
					background-size: contain;
					margin-right: 4px;
				}
			}
		}
	}
	.nav-header {
		.container {
      position:relative;
			height: 112px;
			.flex;
			.header-logo {
				display: inline-block;
				width: 55px;
				height: 55px;
				background-color: #ff6600;
				a {
					display: inline-block;
					width: 110px;
					height: 55px;

					&::before {
						content: "";
						display: inline-block;
						width: 55px;
						height: 55px;
						background: url("/imgs/mi-logo.png") no-repeat center;
						background-size: 55px;
						transition: margin 0.2s;
					}
					&::after {
						content: "";
						display: inline-block;
						width: 55px;
						height: 55px;
						background: url("/imgs/mi-home.png") no-repeat center;
						background-size: 55px;
					}
					&:hover::before {
						margin-left: -55px;
						transition: margin 0.2s;
					}
				}
			}
			.header-menu {
				display: inline-block;
				width:643px;
				padding-left: 209px;
				.item-menu {
					display: inline-block;
					color: #333;
					font-weight: bold;
					font-size: 16px;
					line-height: 112px;
					margin-right: 20px;
					span {
						cursor: pointer;
					}
					&:hover {
             color:#FF6600;
              .children{
                height:220px;
                opacity:1;
              }
          }
          .children{
              position:absolute;
              top:112px;
              left:0;
              width:1226px;
              height:0;
              opacity:0;
              overflow:hidden;
              border-top:1px solid #E5E5E5;
              box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              z-index: 10;
              transition:all .5s;
              background-color: #ffffff;
              .product{
                position:relative;
                float:left;
                width:16.6%;
                height:220px;
                font-size:12px;
                line-height:12px;
                text-align: center;
                a{
                  display:inline-block;
                }
                img{
                  width:auto;
                  height:111px;
                  margin-top:26px;
                }
                .pro-img{
                  height:137px;
                }
                .pro-name{
                  font-weight:bold;
                  margin-top:19px;
                  margin-bottom:8px;
                  color:#333;
                }
                .pro-price{
                  color:#FF6600;
                }
                &:before{
                  content:' ';
                  position:absolute;
                  top:28px;
                  right:0;
                  border-left:1px solid #d7d7d7;
                  height:100px;
                  width:1px;
                }
                &:last-child:before{
                  display:none;
                }
              }
            }
				}
			}
			.header-search {
        width:319px;
        .wrapper {
          height: 50px;
          border:1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border:none;
            border-right: 1px solid #e0e0e0;
            width:264px;
            height: 50px;
            padding-left: 14px;
            box-sizing: border-box;
          }
          a {
            display: inline-block;
            width:18px;
            height:18px;
            background: url('/imgs/icon-search.png') no-repeat center;
            background-size: contain;
            margin-left: 17px;;
          }
        }
			}
		}
	}
}
</style>